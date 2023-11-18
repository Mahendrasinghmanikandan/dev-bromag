import React from "react";

const Locations = () => {
  return (
    <div className="flex pt-10 flex-col items-center justify-center ">
      <img src={"/assets/images/LOCATION.png"} />
      <img
        src={"/assets/images/map.png"}
        className="mt-[-25px] sm:mt-[-55px] md:mt-[-70px] lg:!mt-[-80px]"
      />
    </div>
  );
};

export default Locations;
