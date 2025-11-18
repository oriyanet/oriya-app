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
      cache: 'no-store', // Don't cache, always fetch fresh data
      headers: {
        'Accept': 'application/json',
      },
    });
    
    // Check content-type first to handle HTML error pages gracefully
    const contentType = res.headers.get('content-type') || '';
    
    if (!contentType.includes('application/json')) {
      // If we get HTML instead of JSON, it's likely an error page
      // Read the response as text to see what we got
      const text = await res.text();
      throw new Error(`API returned ${contentType || 'unknown content type'} instead of JSON (status: ${res.status}). This might indicate the API is unavailable.`);
    }
    
    // Now we know it's JSON, read it once
    const rawData = await res.json();
    
    // Check if response is OK after reading JSON
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}: ${JSON.stringify(rawData).substring(0, 200)}`);
    }

    if (!rawData || typeof rawData !== 'object') {
      throw new Error('API returned invalid data format');
    }

    if (!rawData.rows || !Array.isArray(rawData.rows)) {
      throw new Error('Invalid data format from API: missing rows array');
    }

    if (rawData.rows.length === 0) {
      return [];
    }

    const data = rawData.rows.map((item: RawDataRow) => {
      if (!item.func_cls_title_2 || !Array.isArray(item.func_cls_title_2) || item.func_cls_title_2.length === 0) {
        throw new Error('Invalid item structure in API response');
      }
      return {
        name: item.func_cls_title_2[0],
        code: item.code,
        amount: item.net_allocated,
      };
    });
    return data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    // Re-throw the error so the page component can handle it
    throw error;
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
