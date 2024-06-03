import { useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { image, title, publisher, description, customer,id,viewcount } = news;

  let cardStyle;
  let bannerStyle;
  let bannerText;
  let buttonStyle;

  switch (customer) {
    case 'premium with duo':
      cardStyle = 'border border-green-500';
      bannerStyle = 'bg-green-500 text-white';
      bannerText = 'Premium Duo';
      buttonStyle = 'btn-disabled'
      break;
    case 'premium with family':
      cardStyle = 'border border-purple-500';
      bannerStyle = 'bg-purple-500 text-white';
      bannerText = 'Premium Family';
      buttonStyle = 'btn-disabled'
      break;
    default:
      cardStyle = 'border border-gray-500';
      bannerStyle = 'hidden bg-gray-500 text-white';
      bannerText = 'hidden Free';
  }
  return (
    <div>
      <div className={`card card-compact w-full h-[450px] bg-base-100 shadow-xl rounded-none ${cardStyle}`}>
        <figure className="relative">
          <img src={image} className="h-60 w-full object-cover" />
          <div className={`absolute top-0 left-0 px-2 py-1 ${bannerStyle}`}>
            {bannerText}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="text-lg text-secondary uppercase -mt-2 border-b-2">
            <span className="text-gray-500">BY </span>
            {publisher}
          </h2>
          <h2 className="card-title text-2xl">
            {title} : {description}
          </h2>
          <div className="card-actions justify-start">
          <Link to={`/articleDetails/${id}`}>
            <button className={`btn btn-secondary rounded-none ${buttonStyle}`}>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
