import { Link, useLoaderData, useParams } from "react-router-dom";

const ArticleDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const singleNews = news.find((singleNews) => singleNews?._id == id);

  const {
    image,
    title,
    publisher,
    description,
    viewcount,
    long_description,
    tag,
  } = singleNews;

  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col">
          <img
            src={image}
            className=" shadow-2xl h-[500px] w-full object-cover"
          />
          <div className=" w-full flex justify-between">
            <div className="">
              <h2 className="text-lg  mt-2">
                <span className="text-secondary font-bold uppercase">
                  {tag}
                </span>
                <span className="text-gray-500">/ {publisher} </span>
              </h2>
            </div>
            <div className="badge badge-secondary badge-outline py-4 mb-6">
              View : {viewcount}
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl  font-bold">
              {title}: {description}
            </h1>
            <p className="py-6 text-md md:text-xl">
              {long_description}
              {long_description}
              {long_description}
              {long_description}
            </p>

            <div className="flex justify-center">
              <Link to={`/allArticle`}>
                <button className="btn btn-outline btn-secondary">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
