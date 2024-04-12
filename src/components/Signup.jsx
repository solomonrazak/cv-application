import React from "react";

const Signup = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col mt-8">
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
          <button className="p-2 font-medium text-[17px]">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
