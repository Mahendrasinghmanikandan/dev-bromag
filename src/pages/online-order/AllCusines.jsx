import { Divider } from "antd";
import React from "react";
import { Cusines } from "../../helper/datas/cusines";

const AllCusines = () => {
  return (
    <div className="w-screen p-12 flex flex-col gap-y-16">
      <div>
        <h1 className="text-dark_color font-medium text-xl">Order food</h1>
        <img src="/assets/icons/orderborder.png" alt="" />
      </div>
      <div>
        <div className="text-[#3A3A3A] font-semibold text-6xl">
          MULTI CUSINES
        </div>
        <Divider className="!bg-[#B8B8B8]" />
      </div>
      <div className="flex gap-x-10 flex-wrap gap-y-10 pb-10">
        {Cusines.map((res, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] h-[30vh]  rounded-2xl relative cursor-pointer"
            >
              <img
                src={res.img}
                alt=""
                className="w-full h-full !object-cover rounded-2xl"
              />

              <div className="bg-gradient-to-b from-[#00000000] from-0% to-[#000000] to-90% absolute bottom-0 w-full h-[10vh] rounded-b-2xl center_div text-white font-medium">
                {res.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCusines;
