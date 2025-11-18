"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getArtData, ArtObject } from "./utils";
import ArtItem from "./components/ArtItem";

export default function Art() {
  const [departmentName, setDepartmentName] = useState<string>("");
  const [artObjects, setArtObjects] = useState<ArtObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        // Using department ID 6 (Asian Art) as default, fetching 12 items
        const data = await getArtData("6", 12);
        setDepartmentName(data.departmentName);
        setArtObjects(data.artObjects);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loading}>Loading art...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h2>Error loading art</h2>
          <p>{error}</p>
          <p className={styles.errorHint}>
            Please check your internet connection and try again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{departmentName}</h1>
      {artObjects.length === 0 ? (
        <div className={styles.noResults}>
          <p>No art objects found with images in this department.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {artObjects.map((art) => (
            <ArtItem key={art.objectID} art={art} />
          ))}
        </div>
      )}
    </main>
  );
}

