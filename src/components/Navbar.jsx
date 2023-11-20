import _ from "lodash";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  let Menus = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Online Order",
      link: "#",
    },
    {
      id: 3,
      name: "Dining",
      link: "#",
    },
    {
      id: 4,
      name: "Call for order",
      link: "#",
    },
    {
      id: 5,
      name: "Take Away",
      link: "#",
    },
  ];

  return (
    <div className="bg-black  w-screen lg:px-10 px-2 text-white flex items-center justify-between">
      <figure className="w-[80px] h-[80px]">
        <img src={"/assets/logo/logo.png"} className="object-cover" />
      </figure>
      <div className="center_div gap-x-20">
        {/* menus */}
        <div className="lg:block hidden">
          <div className="center_div gap-x-10 ">
            {Menus.map((res, index) => {
              return (
                <Link
                  to={res.link}
                  className="flex flex-col items-center group cursor-pointer  "
                  key={index}
                >
                  <div
                    className={`center_div  group-hover:visible  ${
                      _.get(location, "pathname", false) === res.link
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    <img
                      src="/assets/icons/lines.png"
                      alt=""
                      className="w-[5px] h-[10px]"
                    />
                    <img
                      src="/assets/icons/lines.png"
                      alt=""
                      className="w-[5px] h-[10px]"
                    />
                    <img
                      src="/assets/icons/lines.png"
                      alt=""
                      className="w-[5px] h-[10px]"
                    />
                  </div>
                  <h1
                    className={`group-hover:text-primary_color ${
                      _.get(location, "pathname", false) === res.link
                        ? "text-primary_color"
                        : ""
                    }`}
                  >
                    {res.name}
                  </h1>
                  <img
                    src="/assets/icons/nav_bottom.png"
                    alt=""
                    className={`w-[20px] h-[10px]  group-hover:visible  ${
                      _.get(location, "pathname", false) === res.link
                        ? "visible"
                        : "invisible"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        {/* login */}
        <Link
          to="/login"
          className="px-2 min-w-[100px] rounded-full py-1 bg-[#F2F2F2] text-black center_div text-sm gap-x-2 justify-start"
        >
          <div className="bg-[#D9D9D9] w-[20px] h-[20px] center_div rounded-full">
            <img
              src="/assets/icons/user.png"
              alt=""
              className="w-[10px] h-auto "
            />
          </div>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
