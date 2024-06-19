import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const PieChart = () => {
  const [publicationStats, setPublicationStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPublicationStats();
  }, []);

  const fetchPublicationStats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/publication-stats");
      setPublicationStats(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching publication stats:", error);
      setError(error.message); // Assuming error.message contains useful error info
      setLoading(false);
    }
  };

  const formatDataForPieChart = () => {
    if (!Array.isArray(publicationStats) || publicationStats.length === 0) {
      return [["Publication", "Percentage"]];
    }

    const data = [["Publication", "Percentage"]];
    const totalArticles = publicationStats.reduce(
      (total, pub) => total + pub.count,
      0
    );
    publicationStats.forEach((pub) => {
      const percentage = ((pub.count / totalArticles) * 100).toFixed(2);
      data.push([pub.name, parseFloat(percentage)]);
    });
    return data;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
      
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={formatDataForPieChart()}
        options={{
          is3D: true,
        }}
      />
    </div>
  );
};

export default PieChart;
