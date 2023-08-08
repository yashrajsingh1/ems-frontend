import Image from "next/image";
import React from "react";

type Props = {};

function CardSection({}: Props) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-slate-50">
      <div className="w-[90%] mx-auto flex flex-col  space-y-6 ">
        <div className="mt-12 flex flex-col md:flex-row">
          <div className="flex-1 px-8  relative w-[30rem] h-[30rem]">
            <Image
              src="/map.png"
              fill
              alt="Map visualisation"
              className=" w-full h-full rounded-3xl"
            ></Image>
          </div>
          <div className="flex-1 p-4 text-center ">
            <h1 className="text-lg text-gray-50 font-semibold">Explore</h1>
            <div className="flex flex-nowrap flex-shrink justify-center items-center mt-6">
              <p className="text-sm text-gray-200">
                Browse policies based on your interest and generate new ones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
