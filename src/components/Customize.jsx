import React from 'react';
import { HiDocumentText } from "react-icons/hi2";
import { TiEdit } from "react-icons/ti";

function Customize() {
  return (
    <div className="flex flex-col bg-white items- p-4 rounded-md mx-4">
        <div className="bg-slate-100 flex flex-col items-center w-full p-2 rounded-md">
        <HiDocumentText />
        <p className="text-2xl text-black">Content</p>
        </div>
        <div className="bg-transparent flex flex-col items-center w-full p-2">
        <TiEdit />
        <p className="text-2xl text-black">Customize</p>
        </div>

    </div>
  )
}

export default Customize;