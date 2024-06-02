const NewsCard = ({ news }) => {
  const { image, title, publisher, description, viewcount } = news;
  return (
    <div>
      <div className="card card-compact w-96 h-[450px] bg-base-100 shadow-xl rounded-none border-">
        <figure>
          <img src={image} className="h-60 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg text-[#0095e3] uppercase -mt-2 border-b-2">
            <span className="text-gray-500">BY </span>
            {publisher}
          </h2>
          <h2 className="card-title text-2xl">
            {title} : {description}
          </h2>
          <div className="card-actions justify-start">
            <button className="btn bg-[#0095e3] rounded-none">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
