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
    <div className="w-screen lg:min-h-[90vh] flex lg:flex-row justify-center items-center flex-nowrap flex-col pt-10">
      <div className="lg:w-[30vw] lg:center_div_col flex-nowrap flex-col gap-y-4">
        <div className="lg:text-6xl font-bold gap-y-20 text-light_gray center_div justify-center gap-x-2 ">
          <div className="w-[10px] lg:h-[40px]  h-[20px] bg-[#DF9300] rounded-2xl "></div>
          Non-veg
        </div>
        <p className="lg:text-lg px-2 tracking-wider leading-loose text-light_gray font-bold text-justify pt-2">
          Dare to indulge in the fiery allure of our spicy chicken wings, glazed
          in a secret house-made hot sauce. Accompanied by cool cucumber raita
          for the perfect balance.
        </p>
      </div>
      <div className="lg:w-[60vw] w-screen relative lg:h-[80vh] center_div">
        <img
          className="w-[300px] absolute top-10 right-0 lg:block hidden"
          src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Vegetables-PNG/Red_Chili_Pepper_Transparent_PNG_Clip_Art_Image.png?m=1456458901"
          alt=""
        />
        <img
          className="w-[300px] absolute h-[200px] bottom-20 left-0 lg:block hidden"
          src="https://static.vecteezy.com/system/resources/previews/027/214/961/original/red-chili-red-chili-transparent-background-ai-generated-free-png.png"
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
            "special1",
            "special2",
            "speical3",
            "special1",
            "special2",
            "speical3",
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
    </div>
  );
};

export default NonVeg;
