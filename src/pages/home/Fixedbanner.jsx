import React from "react";

const Fixedbanner = () => {
  return (
    <div className="relative flex w-screen min-h-[60vh] bg-[url('/assets/images/table.png')] bg-fixed bg-cover lg:flex-row flex-col gap-y-10 lg:justify-around gap-x-20 lg:px-20 items-center justify-center py-10">
      <div className="text-[#EFEFEF] lg:text-5xl text-md font-bold !leading-snug lg:text-left text-center pt-2 tracking-wider ">
        Elevate Your <br className="hidden lg:block" /> Dining Experience
        <div className="w-[150px] h-[80vh] bg-[#00000080] absolute bottom-[-10vh] rounded-2xl hidden lg:block"></div>
      </div>
      <div className="center_div bg-yellow_color px-4 py-2 rounded-2xl lg:px-6  p-2 lg:py-4 text-sm lg:text-2xl text-[#E4E4E4] font-bold cursor-pointer">
        BOOK MY TABLE
      </div>
    </div>
  );
};

export default Fixedbanner;
