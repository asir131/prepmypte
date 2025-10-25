"use client";
import Image from "next/image";
import React, { useState } from "react";
import login from "@public/login/login.png";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const Page: React.FC = () => {
  const [eye, setEye] = useState<boolean>(false);

  return (
    <div className="lg:flex justify-around md:mt-20 px-5 py-10 md:px-0 md:py-0">
      <div>
        <h1 className="font-bold text-2xl md:text-[48px]">PrepMyPTE</h1>
        <h1 className="font-bold  md:text-[30px] mt-8">
          Your Complete{" "}
          <span className="text-[#DE3B40]">PTE Core Prep Platform</span>
        </h1>
        <h1 className="font-bold md:text-[30px] mb-5">
          No account yet? <span className="text-[#DE3B40]">Sign Up Here!</span>
        </h1>
        <div className="">
          <Image
            className=""
            src={login}
            height={100}
            width={600}
            alt="Login Illustration"
          />
        </div>
      </div>
      <div className="md:border-l border-[#7D0000] md:pl-20 mt-10 md:mt-0">
        <h1 className="font-bold text-[30px] text-[#781216]">Welcome back !</h1>
        <p className="text-[16px]">
          Please enter your email and password to continue.
        </p>
        <form className="mt-5" action="">
          <div>
            <label className="font-medium text-[12px]" htmlFor="email">
              Email
            </label>
            <div className="border md:w-150 my-3 rounded-xl border-[#DFE3E7] px-5 py-4">
              <input
                className="outline-none"
                type="email"
                id="email"
                placeholder="please enter your email"
              />
            </div>
          </div>

          <div>
            <label className="font-medium text-[12px]" htmlFor="password">
              Password
            </label>
            <div className="border flex justify-between items-center md:w-150 my-3 rounded-xl border-[#DFE3E7] px-5 py-4">
              <input
                className="outline-none"
                type={eye ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              <div className="cursor-pointer" onClick={() => setEye(!eye)}>
                {eye ? <EyeOff /> : <Eye />}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mx-1">
            <span className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[#742023]">Remember me</p>
            </span>
            <p className="text-[#742023] font-medium text-[14px]">
              Forgot Password?
            </p>
          </div>
          <button className="bg-linear-to-r from-[#DB1F2C] to-[#7A0100] text-[18px] text-white text-center w-full py-3 mt-5 rounded-full">
            Login
          </button>
        </form>
        <div className="flex items-center my-4 mt-10">
          <hr className="grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="grow border-t border-gray-300" />
        </div>
        <div className="text-center ">
          By continuing, you agree to the updated{" "}
          <span className="font-bold">Terms of Sale</span>,{" "}
          <span className="font-bold">Terms of Service</span>, <br /> and{" "}
          <span className="font-bold">Privacy Policy</span>.
          <button className="bg-linear-to-r from-[#DB1F2C] to-[#7A0100] text-[18px] text-white text-center w-full py-2 mt-5 rounded-full flex items-center justify-center gap-4 ">
            <FaGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
