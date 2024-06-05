
import NewsCard from "./NewsCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

import { useNavigation } from "react-router-dom";
import Loader from "../../components/sectionTitle/Loader";
import useNews from "../../hooks/useNews";

const AllArticle = () => {
  const [news] =useNews()
  const navigation = useNavigation()
  if (navigation.state === 'loading') return <Loader />
  
  return (
    <section>
        <SectionTitle
                heading="All Articles"
            ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((aNews) => (
        <NewsCard key={aNews._id} news={aNews}></NewsCard>
      ))}
    </div>
    </section>
  );
};

export default AllArticle;
