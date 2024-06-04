import { FaPenToSquare } from "react-icons/fa6";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useNews from "../../hooks/useNews";

const Publishers = () => {
  const [news] = useNews();

  return (
    <section>
      <SectionTitle heading="Publishers"></SectionTitle>
      <div className=" grid grid-cols-2 gap-2 content-center">
        {news.map((aNews) => (
          <div key={aNews.id} className="border-b-1 flex">
            <FaPenToSquare className="my-2" />{" "}
            <h1 className="text-2xl mx-2"> {aNews.publisher}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publishers;
