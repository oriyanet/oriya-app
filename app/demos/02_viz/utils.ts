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
      headers: { Accept: "application/json" },
    });

    // אם ה־API מחזיר HTML או סטטוס לא תקין → נחזיר []
    if (!res.ok) {
      console.error("API responded with status:", res.status);
      return [];
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.error("API returned HTML instead of JSON");
      return [];
    }

    const rawData = await res.json();

    if (!rawData || !Array.isArray(rawData.rows)) {
      console.error("Invalid data format:", rawData);
      return [];
    }

    return rawData.rows
      .filter(
        (item: RawDataRow) =>
          item.func_cls_title_2 &&
          Array.isArray(item.func_cls_title_2) &&
          item.func_cls_title_2.length > 0
      )
      .map((item: RawDataRow) => ({
        name: item.func_cls_title_2[0],
        code: item.code,
        amount: item.net_allocated,
      }));
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return [];
  }
}

export function formatShekels(labelValue: number): string {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.abs(Number(labelValue)) / 1.0e9 + "B ₪"
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M ₪"
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K ₪"
    : Math.abs(Number(labelValue)) + " ₪";
}
