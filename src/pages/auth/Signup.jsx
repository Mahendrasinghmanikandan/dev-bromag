import { Form, Input } from "antd";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  GoogleOutlined,
  KeyOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen h-screen bg-[url('/assets/images/loginhome.png')] bg-cover bg-no-repeat center_div flex-col gap-y-4">
      <img src="/assets/logo/logo.png" alt="" className="w-[150px] h-auto" />
      <div className="text-white text-3xl">Sign up</div>
      <h1 className="text-white tracking-wider">
        Please Sign up to BROMAG with your mail address
      </h1>

      <Form className="flex flex-col gap-y-2">
        <Form.Item>
          <div className="input_topdiv">
            <img
              src="./assets/icons/user.png"
              className="bg-[#DFDFDF]  w-[20px] h-[20px]"
            ></img>
            <Input className="antd_input " placeholder="user name" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="input_topdiv">
            <img
              src="./assets/icons/mail.png"
              className="bg-[#DFDFDF]  w-[20px] h-[20px]"
            ></img>
            <Input className="antd_input" placeholder="E-mail" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="input_topdiv">
            <img
              src="./assets/icons/contact.png"
              className="bg-[#DFDFDF]  w-[20px] h-[20px]"
            ></img>
            <Input className="antd_input" placeholder="phone number" />
          </div>
        </Form.Item>
      </Form>
      <div className="min-w-[200px] center_div -4 py-3 text-md bg-black rounded-full text-white w-fit">
        Sign up
      </div>
      <h1 className="text-white">or</h1>
      <Link
        to="/login"
        className="min-w-[200px] center_div -4 py-3 text-md bg-[#5C5C5C66] shadow-2xl rounded-full text-white w-fit"
      >
        Log in
      </Link>
    </div>
  );
};

export default Signup;
