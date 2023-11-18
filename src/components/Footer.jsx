import React from "react";

import { useNavigate } from "react-router-dom";

function Footer() {
  // const navigate = useNavigate();
  return (
    <div className="bg-black py-4 lg:h-[53vh] pl-7 text-white ">
      <div className="pl-2 lg:pl-0 !items-start justify-start">
        <img src={"/assets/logo/logo.png"} className="w-20" />
      </div>
      <div className="flex items-center justify-between lg:justify-center ">
        <div className="flex flex-col gap-8 md:gap-12 pr-5 lg:pr-0 md:flex-row justify-between lg:w-[90vw]">
          <div className="lg:text-[14px] text-[10px] !text-lg lg:!text-xl">
            <h1 className="lg:text-xl text-lg font-bold  lg:h-[6vh] text-[#EFEFEF] ">
              CONTACT US
              <img src="/assets/icons/footerborder.png" alt="" />
            </h1>
            <div className="flex flex-col gap-y-2">
              <p className="lg:pt-3 pt-1 cursor-pointer center_div justify-start gap-x-2">
                <img src="/assets/icons/call.png" className="w-[15px]" />
                <span className="pl-1 ">+91 91502 89762</span>
              </p>
              <p className="lg:pt-3 pt-1 cursor-pointer center_div justify-start gap-x-2">
                <img src="/assets/icons/email.png" className="w-[15px]" />

                <span className="pl-1 ">mag@bromagindia.com</span>
              </p>
              <p className="lg:pt-3 pt-1 cursor-pointer center_div justify-start gap-x-2">
                <img src="/assets/icons/location.png" className="w-[15px]" />
                <span className="pl-1 ">Velachery, Chennai</span>
              </p>
            </div>
            <p className="flex gap-4  lg:pt-4 pt-2 cursor-pointer">
              <img src="/assets/icons/igram.png" className="w-[25px]" />
              <img src="/assets/icons/fbook.png" className="w-[25px]" />
              <img src="/assets/icons/wup.png" className="w-[25px]" />
              <img src="/assets/icons/ytube.png" className="w-[25px]" />
              <img src="/assets/icons/linkedin.png" className="w-[25px]" />
            </p>
          </div>
          <div className="lg:text-[14px] text-[10px] md:border-r-2 border-light_white md:pr-40 !text-lg lg:!text-xl">
            <h1 className="lg:text-xl text-lg font-bold  lg:h-[6vh] text-[#EFEFEF]">
              ABOUT US
              <img src="/assets/icons/footerborder.png" alt="" />
            </h1>
            <p
              className="lg:pt-3 pt-1 font-[400] text-[#E5E5E5] cursor-pointer"
              // onClick={() => {
              //   navigate("whoweare");
              // }}
            >
              Who we are
            </p>
            <p
              className="lg:pt-3 pt-1 font-[400] text-[#E5E5E5] cursor-pointer"
              // onClick={() => {
              //   navigate("privacy");
              // }}
            >
              Privcay policy
            </p>
            <p
              className="lg:pt-3 pt-1 font-[400] text-[#E5E5E5] cursor-pointer"
              // onClick={() => {
              //   navigate("cancellation");
              // }}
            >
              Refund and cancellation
            </p>
            <p
              className="lg:pt-3 pt-1 font-[400] text-[#E5E5E5] cursor-pointer"
              // onClick={() => {
              //   navigate("termsandcondition");
              // }}
            >
              Terms and condition
            </p>
          </div>
          <div className="lg:text-[14px]">
            <h1 className="lg:text-xl text-lg font-bold  lg:h-[6vh] text-[#B3B3B3]">
              GIVE YOUR FEEDBACK
            </h1>
            <div className="flex flex-col lg:flex-col gap-5 lg:pt-3">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border-b"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent border-b"
                />
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="bg-transparent border-b"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:pt-3">
                <input
                  type="text"
                  placeholder="Write something..."
                  className="lg:py-2 lg:px-2 py-1 px-1 rounded-md"
                />
                <button className="bg-[#CD5C08] rounded-md py-1  lg:py-2 lg:px-6">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
