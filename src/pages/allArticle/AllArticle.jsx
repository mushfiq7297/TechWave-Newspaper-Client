import NewsCard from "./NewsCard";
import { useNavigation } from "react-router-dom";
import Loader from "../../components/sectionTitle/Loader";
import useNews from "../../hooks/useNews";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const AllArticle = () => {
  const [news, error] = useNews();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;

  useEffect(() => {
    let filteredArticles = news;

    if (searchQuery) {
      filteredArticles = filteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPublisher) {
      filteredArticles = filteredArticles.filter(
        (article) => article.publisher === selectedPublisher
      );
    }

    if (selectedTag) {
      filteredArticles = filteredArticles.filter((article) =>
        article.tag.includes(selectedTag)
      );
    }

    setFilteredNews(filteredArticles);
  }, [searchQuery, selectedPublisher, selectedTag, news]);

  const uniquePublishers = [...new Set(news.map((article) => article.publisher))];
  const uniqueTags = [...new Set(news.map((article) => article.tag))];

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <Helmet>
        <title>TechWave - All Articles</title>
      </Helmet>
      <div className="divider divider-secondary text-3xl mt-24 mb-16 uppercase">
        all article
      </div>
      <div className="flex flex-col md:flex-row justify-end mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by title"
          className="input input-secondary w-full md:max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="select select-secondary w-full md:max-w-xs"
          value={selectedPublisher}
          onChange={(e) => setSelectedPublisher(e.target.value)}
        >
          <option value="">Search by publisher</option>
          {uniquePublishers.map((publisher) => (
            <option key={publisher} value={publisher}>
              {publisher}
            </option>
          ))}
        </select>
        <select
          className="select select-secondary w-full md:max-w-xs"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">Search by tag</option>
          {uniqueTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((aNews) => (
          <NewsCard key={aNews._id} news={aNews}></NewsCard>
        ))}
      </div>
    </section>
  );
};

export default AllArticle;
