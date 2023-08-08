import Image from "next/image";
import React from "react";

type Props = {};

function CardSection({}: Props) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-slate-50">
      <div className="w-[90%] mx-auto flex flex-col  space-y-6 ">
        <div className="mt-4 flex flex-col md:flex-row">
          <div className="flex-1 px-8  relative w-[500px] h-[500px]">
            <Image
              src="/map.png"
              fill
              alt="Map visualisation"
              className=" w-full h-full rounded-3xl"
            ></Image>
          </div>
          <div className="flex-1">hello</div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
