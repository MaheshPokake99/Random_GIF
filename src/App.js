import React from "react";
import Random from "./Components/Random"
import Tag from "./Components/Tag"
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background">
      <h1 className="bg-white rounded-lg w-11/12 text-center 
          mt-[40px] px-10 py-2 text-4xl font-bold mx-auto">RRANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
