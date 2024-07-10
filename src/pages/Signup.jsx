import React from "react";
import SignupImage from "../assets/SignUp.png";

const Signup = () => {
  return (
    <div className=" w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px] ">
          <h1 className="text-[34px] font-bold text-primary">
            Get started with easily register
          </h1>
          <p className="text-xl font-normal text-black opacity-50 items-start">
            Free register and you can enjoy it
          </p>
          <div className="w-[368px] h-[80px] mt-[60px] reletive ">
            <label className="w-full h-full text-sm text-primary  absolute ">
              {""}
              Email Address
            </label>
            <input
              className=" w-full h-full border border-primary/50 rounded-lg pl-[50px]  "
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-2/4 h-full ">
        <img
          className="ml-auto w-full h-full object-cover"
          src={SignupImage}
          alt="SignupImage"
        />
      </div>
    </div>
  );
};

export default Signup;
