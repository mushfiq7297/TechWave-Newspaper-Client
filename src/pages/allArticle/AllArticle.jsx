
import NewsCard from "./NewsCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useNews from "../../hooks/useNews";

const AllArticle = () => {
  const [news] =useNews()
  return (
    <section>
        <SectionTitle
                heading="All Articles"
            ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((aNews) => (
        <NewsCard key={aNews.id} news={aNews}></NewsCard>
      ))}
    </div>
    </section>
  );
};

export default AllArticle;
