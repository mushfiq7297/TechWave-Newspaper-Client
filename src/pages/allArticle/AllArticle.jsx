import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";



const AllArticle = () => {
    const news = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 w-full mx-auto">
        {
            news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
          }
        </div>
    );
};

export default AllArticle;