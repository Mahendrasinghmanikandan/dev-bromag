import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const NonVeg = () => {
  return (
    <div className="w-screen lg:min-h-[90vh] flex lg:flex-row justify-center items-center flex-nowrap flex-col-reverse lg:pt-0 pt-10">
      <div className="lg:w-[60vw] w-screen relative lg:h-[80vh] center_div">
        <img
          className="w-[200px] absolute top-4 right-10"
          src="/assets/images/leaf.jpg"
          alt=""
        />
        <img
          className="w-[300px] absolute h-[200px] bottom-20 left-0 "
          src="/assets/images/leaf2.jpg"
          alt=""
        />
        <img className="/assets/images/leaf.jpg" alt="" />
        <img
          className="w-[200px] absolute h-[130px] top-20 left-20 "
          src="/assets/images/leaf3.jpg"
          alt=""
        />
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 1000,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 90,
            modifier: 2.5,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          className="mySwiper w-screen lg:w-[50vw] px-[100px] center_div"
        >
          {[
            "vegetarian1",
            "vegetarian2",
            "vegetarian3",
            "vegetarian1",
            "vegetarian2",
            "vegetarian3",
          ].map((res, index) => {
            return (
              <div className="lg:!w-[80vw]" key={index}>
                <SwiperSlide>
                  <div className="relative center_div">
                    <img
                      src={`/assets/images/${res}.png`}
                      type="video/mp4"
                      className="lg:w-[30vw] w-[98vw] lg:h-[300px] select-none"
                    />
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:w-[30vw] lg:center_div_col flex-nowrap flex-col gap-y-4">
        <div className="lg:text-6xl font-bold gap-y-20 text-light_gray center_div justify-center gap-x-2 ">
          <div className="w-[10px] lg:h-[40px]  h-[20px] bg-[#DF9300] rounded-2xl "></div>
          Vegetarian
        </div>
        <p className="lg:text-lg px-2 tracking-wider leading-loose text-light_gray font-bold text-justify pt-2">
          At Green Garden Bistro, vegetarians are in for a treat with a menu
          that elevates plant-based cuisine to a whole new level. The restaurant
          not only caters to vegetarians
        </p>
      </div>
    </div>
  );
};

export default NonVeg;
