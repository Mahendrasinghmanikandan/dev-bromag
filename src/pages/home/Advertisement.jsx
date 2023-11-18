import React from "react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Advertisement() {
  return (
    <div className="w-screen lg:min-h-screen lg:px-10 px-2 py-10 relative center_div gap-y-2">
      <div className="lg:text-6xl md:text-5xl font-bold text-lg text-left w-screen  text-light_gray  lg:pt-20">
      BROMAG Advertisement
      </div>
      <div className="center_div w-screen  lg:h-[calc(100vh-100px)]  px-2">
        <img
          src="/assets/images/arc.png"
          alt=""
          className="absolute top-[120px] right-0 hidden lg:block"
        />
        <img
          src="/assets/images/arcleft.png"
          alt=""
          className="absolute bottom-[120px] left-0 hidden lg:block"
        />
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
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
          spaceBetween={100}
          scrollbar={true}
          autoplay={true}
          modules={[Keyboard, Scrollbar, EffectCoverflow, Autoplay]}
          className="mySwiper px-10"
        >
          {[
            "add1.png",
            "add2.png",
            "add3.png",
            "add2.png",
            "add3.png",
            "add2.png",
          ].map((res, index) => {
            return (
              <SwiperSlide
                key={index}
                className="lg:w-[35vw]  h-auto bg-transparent !rounded-2xl"
              >
                <img
                  src={`/assets/images/${res}`}
                  alt=""
                  className="w-full h-full rounded-2xl shadow-2xl select-none"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Advertisement;
