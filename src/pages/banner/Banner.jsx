import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setBannerData(data));
  }, []);

  return (
    <div>
      <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={item.image} alt={item.title} className="h-screen w-full object-cover" />
            <div className="absolute text-2xl bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-10 text-left md:text-4xl font-bold">
              <p>{item.title} : {item.description}</p>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
