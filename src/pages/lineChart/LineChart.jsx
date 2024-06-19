// LineChart.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

const LineChart = () => {
  const [articleViewCounts, setArticleViewCounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleViewCounts();
  }, []);

  const fetchArticleViewCounts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/article-viewcounts");
      setArticleViewCounts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching article view counts:", error);
      setError(error.message); // Assuming error.message contains useful error info
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Format data for line chart
  const chartData = [
    ["Article", "View Count"],
    ...articleViewCounts.map(article => [article.title, article.viewcount])
  ];

  return (
    <div>
     
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          hAxis: {
            title: 'Article',
          },
          vAxis: {
            title: 'View Count',
          },
          legend: { position: 'none' },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default LineChart;
