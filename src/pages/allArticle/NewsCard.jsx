import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import Loader from "../../components/sectionTitle/Loader";

const NewsCard = ({ news }) => {
  const navigation = useNavigation()
  if (navigation.state === 'loading') return <Loader />
  const { image, title, publisher, description, customer,id,tag } = news;
  
  let cardStyle;
  let bannerStyle;
  let bannerText;
  let buttonStyle;

  switch (customer) {
    case 'premium with duo':
      cardStyle = 'border border-primary';
      bannerStyle = 'bg-primary text-white';
      bannerText = 'Premium Duo';
      buttonStyle = 'btn-disabled'
      break;
    case 'premium with family':
      cardStyle = 'border border-success';
      bannerStyle = 'bg-success text-white';
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
          <h2 className="text-lg  -mt-2 border-b-2">
          <span className="text-secondary font-bold uppercase">{tag} </span>
            <span className="text-gray-500">/ {publisher} </span>
            
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
