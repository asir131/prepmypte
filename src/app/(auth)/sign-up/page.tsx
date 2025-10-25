"use client";
import Image from "next/image";
import React, { useState } from "react";
import signup from "@public/signup/signup.png";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Page: React.FC = () => {
  const [eye, setEye] = useState<boolean>(false);
  const [confimrPass, setConfirmPass] = useState<boolean>(false);

  return (
    <div className="lg:flex justify-around md:mt-20 px-5 py-10 md:px-0 md:py-0">
      <div>
        <h1 className="font-bold text-2xl md:text-[48px]">PrepMyPTE</h1>
        <h1 className="font-bold  md:text-[30px] mt-8">
          Your Complete{" "}
          <span className="text-[#DE3B40]">PTE Core Prep Platform</span>
        </h1>
        <h1 className="font-bold md:text-[30px] mb-5">
          Already have an account? !{" "}
          <span className="text-[#DE3B40]">Login Here</span>
        </h1>
        <div className="">
          <Image
            className=""
            src={signup}
            height={100}
            width={500}
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
              User Name
            </label>
            <div className="border md:w-150 my-3 rounded-xl border-[#DFE3E7] px-5 py-4">
              <input
                className="outline-none"
                type="email"
                id="email"
                placeholder="Enter your name"
              />
            </div>
          </div>
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

          <div>
            <label className="font-medium text-[12px]" htmlFor="password">
              Confirm Password
            </label>
            <div className="border flex justify-between items-center md:w-150 my-3 rounded-xl border-[#DFE3E7] px-5 py-4">
              <input
                className="outline-none"
                type={confimrPass ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-enter your password"
              />
              <div
                className="cursor-pointer"
                onClick={() => setConfirmPass(!confimrPass)}
              >
                {confimrPass ? <EyeOff /> : <Eye />}
              </div>
            </div>
          </div>

          <button className="bg-linear-to-r from-[#DB1F2C] to-[#7A0100] text-[18px] text-white text-center w-full py-3 mt-5 rounded-full">
            Sign Up
          </button>
          <div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link href="/login" className="text-[#DB1F2C]">
                Login
              </Link>
            </p>
          </div>
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
