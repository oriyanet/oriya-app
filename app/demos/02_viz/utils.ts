interface RawDataRow {
  code: string;
  parent: string;
  func_cls_title_1: string[];
  func_cls_title_2: string[];
  net_allocated: number;
}

const dataQuery = encodeURIComponent(
  "SELECT code, parent, func_cls_title_1, func_cls_title_2, net_allocated FROM raw_budget WHERE code LIKE 'C8%' AND length(code)=4 AND year=2023"
);
const dataEndpoint = `https://next.obudget.org/api/query?query=${dataQuery}`;

export async function getDataForChart() {
  try {
    const res = await fetch(dataEndpoint, { 
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }
    
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('API did not return JSON');
    }
    
    const rawData = await res.json();

    if (!rawData.rows || !Array.isArray(rawData.rows)) {
      throw new Error('Invalid data format from API');
    }

    const data = rawData.rows.map((item: RawDataRow) => {
      return {
        name: item.func_cls_title_2[0],
        code: item.code,
        amount: item.net_allocated,
      };
    });
    return data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    // Return empty array as fallback
    return [];
  }
}

export function formatShekels(labelValue: number): string {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.abs(Number(labelValue)) / 1.0e9 + "B ₪"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M ₪"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K ₪"
    : Math.abs(Number(labelValue)) + " ₪";
}
