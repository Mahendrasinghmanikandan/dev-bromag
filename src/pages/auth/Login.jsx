import { Input } from "antd";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { KeyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-[url('/assets/images/loginhome.png')] bg-cover bg-no-repeat center_div flex-col gap-y-4">
      <img src="/assets/logo/logo.png" alt="" className="w-[150px] h-auto" />
      <h1 className="text-white tracking-wider">
        Please log in to BROMAG with your phone number
      </h1>
      <div className="p-2">
        <PhoneInput
          country={"in"}
          className="w-[600px] !h-[40px] !rounded-[10px]"
        />
      </div>
      <div className="min-w-[200px] center_div px-4 py-3 text-md bg-black rounded-full text-white w-fit">
        Generate OTP
      </div>
      <div className="bg-white rounded-[10px] center_div pl-2 w-[400px]">
        <img
          src="./assets/icons/otp.png"
          className="bg-white  w-[30px] h-[30px]"
        ></img>
        <Input
          className="w-[350px] h-[50px]  bg-white placeholder:text-label_color antd_input"
          placeholder="Enter the OTP"
        />
      </div>
      <Link to="/" className="min-w-[200px] center_div -4 py-3 text-md bg-black rounded-full text-white w-fit cursor-pointer">
        Log in
      </Link>
      <h1 className="text-white">or</h1>
      <Link
        to="/signup"
        className="min-w-[200px] center_div -4 py-3 text-md bg-[#5C5C5C66] shadow-2xl rounded-full text-white w-fit"
      >
        Sign up
      </Link>
    </div>
  );
};

export default Login;
