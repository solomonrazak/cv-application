import React from "react";
import { MdDelete } from "react-icons/md";

function Example() {
  return (
    <div className="bg-white flex flex-col justify-around md:w-96 h-12 p-2 mx-auto rounded-md md:flex md:flex-row cursor-pointer">
      <div className="flex justify-around items-center gap-2">
      <MdDelete className="text-red-600"/>
      <p className="text-red-600">Clear Resume</p>
      </div>
      <div className="bg-slate-100 flex items-center justify-center p-4 rounded-md">
         <p>Load Example</p>
      </div>
    </div>
  );
}

export default Example;
