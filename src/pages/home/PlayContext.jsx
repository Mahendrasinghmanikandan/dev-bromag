import React from "react";

const PlayContext = () => {
  return (
    <div className="w-screen m-auto flex items-center lg:flex-row flex-col justify-between px-10  bg-[url('/assets/images/backgame.png')] bg-no-repeat bg-center bg-cover lg:rounded-[50px] pb-10">
      <img src="/assets/images/game.png" alt="" />
      <div className="flex w-screen lg:w-[60vw] items-center justify-start flex-col gap-y-5 lg:gap-y-20">
        <div className="flex flex-col gap-y-4 items-center">
          <h1 className="lg:text-6xl md:text-5xl text-xl text-white play_font">
            PLAY THE CONTEST
          </h1>
          <h2 className="lg:text-2xl md:text-xl text-md text-white play_sub_font">
            To enter the scratch code
          </h2>
        </div>
        <div className=" center_div bg-gradient-to-r from-yellow_color to-[#c8baa2] lg:px-6  p-2 lg:py-4   rounded-2xl text-[#E4E4E4] font-bold cursor-pointer text-sm lg:text-2xl">
          LOG IN TO PLAY CONTEST
        </div>
      </div>
    </div>
  );
};

export default PlayContext;
