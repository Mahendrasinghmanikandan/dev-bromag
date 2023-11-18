import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-screen lg:min-h-[calc(100vh-80px)] bg-white lg:pb-[50px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="w-full lg:h-[110vh] pb-[100px]"
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {[1, 2, 3].map((res, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src="/assets/images/home.png"
                alt=""
                className="object-cover lg:h-[100vh] w-[100vw] rounded-b-[70px]  shadow-black"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
