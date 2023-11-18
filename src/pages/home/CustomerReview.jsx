import { Rate } from "antd";
import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerReview = () => {
  const Items = [
    {
      id: 1,
      name: "Sam sundar",
      image: "/assets/images/review1.png",
      para: "I recently had the pleasure of dining at Culinary Delights, a hidden gem nestled in the heart of Cityville. From the moment I walked in, I was impressed by the warm and inviting ambiance ",
    },
    {
      id: 2,
      name: "Johnson bey",
      image: "/assets/images/review2.png",
      para: "I recently had the pleasure of dining at Culinary Delights, a hidden gem nestled in the heart of Cityville. From the moment I walked in, I was impressed by the warm and inviting ambiance ",
    },
    {
      id: 3,
      name: "Tharani zennl",
      image: "/assets/images/review3.png",
      para: "I recently had the pleasure of dining at Culinary Delights, a hidden gem nestled in the heart of Cityville. From the moment I walked in, I was impressed by the warm and inviting ambiance ",
    },
    {
      id: 2,
      name: "Johnson bey",
      image: "/assets/images/review2.png",
      para: "I recently had the pleasure of dining at Culinary Delights, a hidden gem nestled in the heart of Cityville. From the moment I walked in, I was impressed by the warm and inviting ambiance ",
    },
    {
      id: 3,
      name: "Tharani zennl",
      image: "/assets/images/review3.png",
      para: "I recently had the pleasure of dining at Culinary Delights, a hidden gem nestled in the heart of Cityville. From the moment I walked in, I was impressed by the warm and inviting ambiance ",
    },
  ];

  return (
    <div className="w-screen lg:min-h-[90vh] center_div justify-start  items-start lg:pt-10">
      <div className="lg:text-6xl font-bold  lg:text-left text-center w-screen text-light_gray px-10 ">
        Customer's Review
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        // autoplay={{delay:1000}}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        className="mySwiper w-screen center_div"
      >
        {Items.map((res, index) => {
          return (
            <SwiperSlide
              key={index}
              className=" lg:py-10 w-screen pl-[20px] px-10"
            >
              <div className="lg:w-[30vw] w-[90vw] min-h-[300px] shadow-2xl rounded-[10%] center_div justify-start p-10 text-light_gray gap-y-2">
                <div className="center_div flex-nowrap gap-x-4 gap-y-2">
                  <img
                    src={res.image}
                    className="lg:w-[80px] w-[50px] h-auto rounded-full "
                  />
                  <div>
                    <p className="font-bold lg:text-xl">{res.name}</p>
                    <p>
                      <Rate value={4} className="lg:text-xl text-sm" />
                    </p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="lg:text-md leading-6">{res.para}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
