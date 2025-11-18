import { BudgetChart } from "./components/BudgetChart";
import { getDataForChart } from "./utils";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function Viz() {
  let data: Array<{ name: string; code: string; amount: number }> = [];
  let error: string | null = null;

  try {
    data = await getDataForChart();
    if (data.length === 0) {
      error = "No data available from the API.";
    }
  } catch (err) {
    console.error('Error loading chart data:', err);
    error = err instanceof Error ? err.message : "Failed to load chart data.";
  }

  return (
    <main>
      <div>
        <p>
          <strong>What is happening in this example?</strong>
        </p>
        <ul>
          <li>We are getting data from a publicly accessible API.</li>
          <li>
            When the data is loaded, we transform it into a shape our chart
            expects.
          </li>
          <li>
            We pass the transformed data into the chart so it can render to the
            UI.
          </li>
          <li>
            We created a reusable custom chart component instead of inlining all
            our chart code here
          </li>
          <li>
            The charting library we are using has lots of chart types, see
            https://recharts.org/en-US
          </li>
        </ul>
      </div>
      <h2>Israel&apos;s 2023 Budget - Income</h2>
      <br />
      <div>
        {error ? (
          <div>
            <p style={{ color: 'red' }}>Error: {error}</p>
            <p>Please try refreshing the page or check if the API is available.</p>
          </div>
        ) : data.length > 0 ? (
          <BudgetChart data={data} xKey="name" yKey="amount" />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </main>
  );
}
