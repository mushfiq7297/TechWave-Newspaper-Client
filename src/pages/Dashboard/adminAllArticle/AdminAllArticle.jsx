import { useEffect, useState } from "react";
import AdminAllArticleCard from "./AdminAllArticleCard";
import { Helmet } from "react-helmet-async";
import Pagination from "../../../components/Pagination";
import Loader from "../../../components/sectionTitle/Loader";
import axios from "axios";


const AdminAllaNews = () => {
  const [news,setNews] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/allArticle");
        if (response.data && Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
 

  // Calculate current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(news.length / articlesPerPage);

  //handle article update
  const handleArticleUpdate = (updatedArticle) => {
    if (!updatedArticle || !updatedArticle._id) {
      console.error('Invalid updated article:', updatedArticle);
      return;
    }
  
    setNews(prevArticles => 
      prevArticles.map(aNews => 
        aNews._id === updatedArticle._id ? updatedArticle : aNews
      )
    );
  };
  return (
    <div>
      <section>
        <Helmet>
          <title>TechWave - Admin/All Articles</title>
        </Helmet>
        <div className="divider divider-secondary text-3xl  mb-16 uppercase">
          all article
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((aNews) => (
            // Add a safety check before rendering
            aNews && aNews._id && (
              <AdminAllArticleCard
                key={aNews._id}
                news={aNews}
                onArticleUpdate={handleArticleUpdate}
              />
            )
          ))}
        </div>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
};

export default AdminAllaNews;
