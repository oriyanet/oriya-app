const API_BASE = "https://collectionapi.metmuseum.org/public/collection/v1";

export interface ArtObject {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImage: string;
  primaryImageSmall: string;
  department: string;
  objectName: string;
  culture: string;
  period: string;
  medium: string;
  objectDate: string;
  dimensions: string;
  creditLine: string;
  country: string;
  classification: string;
  isHighlight: boolean;
  isPublicDomain: boolean;
}

export interface Department {
  departmentId: number;
  displayName: string;
}

export interface ObjectsResponse {
  total: number;
  objectIDs: number[];
}

export interface DepartmentsResponse {
  departments: Department[];
}

/**
 * Fetches random art objects from a specific department
 * @param departmentId - The ID of the department
 * @param count - Number of art objects to fetch
 * @returns Array of art objects
 */
export async function getArtData(
  departmentId: string,
  count: number
): Promise<{ departmentName: string; artObjects: ArtObject[] }> {
  try {
    // First, get the department name
    const departmentsResponse = await fetch(`${API_BASE}/departments`);
    if (!departmentsResponse.ok) {
      throw new Error(
        `Failed to fetch departments: ${departmentsResponse.status} ${departmentsResponse.statusText}`
      );
    }
    const departmentsData: DepartmentsResponse = await departmentsResponse.json();
    const department = departmentsData.departments.find(
      (dept) => dept.departmentId === parseInt(departmentId)
    );
    const departmentName = department?.displayName || "Unknown Department";

    // Get all object IDs from the department
    const objectsResponse = await fetch(
      `${API_BASE}/objects?departmentIds=${departmentId}`
    );
    if (!objectsResponse.ok) {
      throw new Error(
        `Failed to fetch objects: ${objectsResponse.status} ${objectsResponse.statusText}`
      );
    }
    const objectsData: ObjectsResponse = await objectsResponse.json();

    if (!objectsData.objectIDs || objectsData.objectIDs.length === 0) {
      throw new Error("No objects found in this department");
    }

    // Select random object IDs
    const shuffled = [...objectsData.objectIDs].sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, Math.min(count, shuffled.length));

    // Fetch details for each selected object
    const artObjectsPromises = selectedIds.map(async (objectID) => {
      try {
        const objectResponse = await fetch(`${API_BASE}/objects/${objectID}`);
        if (!objectResponse.ok) {
          console.warn(
            `Failed to fetch object ${objectID}: ${objectResponse.status}`
          );
          return null;
        }
        return objectResponse.json();
      } catch (error) {
        console.warn(`Error fetching object ${objectID}:`, error);
        return null;
      }
    });

    const artObjects = await Promise.all(artObjectsPromises);

    // Filter out null values and objects without images
    const artObjectsWithImages = artObjects.filter(
      (obj) => obj && obj.primaryImage && obj.primaryImage !== ""
    );

    // If we don't have enough objects with images, try to get more
    if (artObjectsWithImages.length < count && objectsData.objectIDs.length > selectedIds.length) {
      const remainingIds = objectsData.objectIDs.filter(
        (id) => !selectedIds.includes(id)
      );
      const additionalNeeded = count - artObjectsWithImages.length;
      const additionalIds = remainingIds
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(additionalNeeded * 2, remainingIds.length));

      const additionalPromises = additionalIds.map(async (objectID) => {
        try {
          const objectResponse = await fetch(`${API_BASE}/objects/${objectID}`);
          if (!objectResponse.ok) {
            return null;
          }
          const obj = await objectResponse.json();
          return obj && obj.primaryImage && obj.primaryImage !== "" ? obj : null;
        } catch {
          return null;
        }
      });

      const additionalObjects = await Promise.all(additionalPromises);
      const validAdditional = additionalObjects.filter((obj) => obj !== null);
      artObjectsWithImages.push(...validAdditional.slice(0, additionalNeeded));
    }

    return {
      departmentName,
      artObjects: artObjectsWithImages,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred while fetching art data");
  }
}

