import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image.jpeg";
import goole from "../assets/images/goole.svg";

const Login = () => {
    function handleSubmit(){
        
    }
  return (
    <div className="flex-col w-full h-screen flex md:flex-row">
      <div id="image-sesction" className="relative md:w-1/2 h-full">
        <img src={image} alt="logo" className="object-cover h-full" />
        <div className="absolute top-[25%] text-center text-gray-700 leading-[4rem] font-bold text-[35px]">
          <h1 className="]">
            Create the perfect resume to land you your dream job.
          </h1>
          <p className="">Sign up for free now!</p>
        </div>
      </div>
      <div className="px-5 pt-5 mt-8 mx-7 flex flex-col space-y-[35px] pl-10 pb-3">
        <h2 className="font-medium">Dexter Inc.</h2>

        <div>
          <h1 className="font-bold text-[15px] mb-4">Login</h1>
          <p className="text-base">Welcome! Please enter your details.</p>
          <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mt-8">
            <input
              type="email"
              placeholder="Email"
              className="w-[350px] text-slate-900 border-b py-2 border-slate-900 outline-none focus:outline-none pl-1 mb-5"
            />
            <input
              type="email"
              placeholder="Password"
              className="w-[350px] text-black border-b py-2 border-slate-900 outline-none focus:outline-none pl-1"
            />
            <div className="bg-blue-400 mt-8 text-center text-white rounded-md hover:bg-blue-600">
              <button className="p-2 font-medium text-[17px]" type="submit">Log In</button>
            </div>
            <p className="flex justify-center my-3 font-medium">or</p>
            <div className="flex justify-center gap-4 items-center border border-black font-medium p-2 rounded-md cursor-pointer">
              <img src={goole} className="w-[20px] h-[20px]"/>
              Sign in with Google
            </div>
          </div>
          </form>
        </div>

        <div className="text-black mb-[-10px]">
          <p>Don't have an account?<span className="pl-2 text-blue-400 underline"><Link to="/signup">Sign up</Link></span><span className="pl-1">now!</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
