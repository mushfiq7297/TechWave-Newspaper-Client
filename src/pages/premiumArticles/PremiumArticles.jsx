import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loader from "../../components/sectionTitle/Loader";

const PremiumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await axios.get("http://localhost:5000/premiumArticles", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching premium articles:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Helmet>
        <title>TechWave - Premium Articles</title>
      </Helmet>
      <h2 className="text-3xl mb-8">Premium Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article._id} className="card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/articleDetails/${article._id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumArticles;
