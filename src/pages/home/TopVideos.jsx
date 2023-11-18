import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import restaurantvdo1 from "/assets/videos/restaurantvdo1.mp4";
import restaurantvdo2 from "/assets/videos/restaurantvdo2.mp4";
import restaurantvdo3 from "/assets/videos/restaurantvdo3.mp4";
import Arc from "../../components/Arc";
import "swiper/css";
import "swiper/css/navigation";
import { Grid, Modal } from "antd";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";

function TopVideos() {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentVideo, setcurrentVideo] = useState("");

  const video = [
    {
      id: 1,
      video: restaurantvdo1,
    },
    {
      id: 2,
      video: restaurantvdo2,
    },
    {
      id: 3,
      video: restaurantvdo3,
    },
  ];

  return (
    <>
      <div className="w-screen !min-h-screen text-white bg-[url('/assets/images/video.png')] bg-cover justify-around center_div_col pb-10">
        <div className="center_div justify-evenly py-10  px-10 items-center">
          <div className="lg:text-7xl text-xl md:text-5xl text-light_white lg:py-0 py-10">
            Lookout our <br className="lg:block hidden text-lg" />
            videos
          </div>
          <video
            controls
            src="/assets/videos/bromagvdeo.mp4"
            className=" lg:w-[35vw] h-[40vh] rounded-[50px] object-cover"
          ></video>
        </div>
        <div className="center_div">
          <Swiper
            // navigation={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoPlay={{
              delay: 500,
            }}
            spaceBetween={80}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper px-10 w-[90vw] lg:w-[80vw]  center_div"
          >
            {["restaurantvdo1", "restaurantvdo2", "restaurantvdo3"].map(
              (res, index) => {
                return (
                  <SwiperSlide key={index} className="center_div">
                    <div className="center_div">
                      <video
                        controls
                        src={`/assets/videos/${res}.mp4`}
                        className=" lg:w-[35vw] h-[40vh] rounded-[50px] object-cover"
                      ></video>
                      {/* <img
                        src={`/assets/videos/${res}.png`}
                        type="video/mp4"
                        className="lg:w-[25vw] w-screen object-cover h-[200px] !rounded-[50px]"
                      />
                      <div className="absolute w-[25vw] h-[200px] top-0 center_div">
                        <div
                          className="absolute w-[50px] h-[50px]  rounded-full  bg-black center_div cursor-pointer z-50"
                          onClick={() => {
                            setOpenVideo(true);
                            setcurrentVideo(`/assets/videos/${res}.mp4`);
                          }}
                        >
                          <img
                            src="/assets/videos/paly_vector.png"
                            alt=""
                            className="absolute w-[10px] h-[10px] "
                          />
                        </div>
                        <Arc />
                      </div> */}
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <Modal
        open={openVideo}
        closable={false}
        footer={false}
        destroyOnClose
        onCancel={() => {
          setOpenVideo(false);
          setOpenVideo("");
        }}
      >
        <video muted autoPlay loop controls className="w-fit h-auto">
          <source src={currentVideo} />
        </video>
      </Modal>
    </>
  );
}

export default TopVideos;
