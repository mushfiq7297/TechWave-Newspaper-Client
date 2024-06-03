import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AllArticle = () => {
  const news = useLoaderData();
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
