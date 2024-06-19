import { useState, useEffect } from "react";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/allArticle");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  return [news, error];
};

export default useNews;
