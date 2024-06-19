import NewsCard from "./NewsCard";


import { useNavigation } from "react-router-dom";
import Loader from "../../components/sectionTitle/Loader";
import useNews from "../../hooks/useNews";
import { Helmet } from "react-helmet-async";

const AllArticle = () => {
  const [news] = useNews();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;

  return (
    <section>
       <Helmet>
                <title>TechWave - All Articles</title>
            </Helmet>
      <div className="divider divider-secondary text-3xl mt-24 mb-16 uppercase">
        all article
      </div>
      <div className="flex justify-end mb-4">
        <select className="select select-secondary w-full max-w-xs">
          <option disabled selected>
            Search by category
          </option>
          <option>Tech</option>
          <option>AI</option>
          <option>Security</option>
          <option>Policy</option>
          <option>Business</option>
          <option>Gadjet</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((aNews) => (
          <NewsCard key={aNews._id} news={aNews}></NewsCard>
        ))}
      </div>
      
    </section>
  );
};

export default AllArticle;
