import React from "react";
import Image from "next/image";
import { car, roadmap } from "@/utils/icons";

const Roadmap = () => {
  return (
    <div className="bg-[#112F47] py-24" id="roadmap">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 items-center gap-14 md:gap-8">
        <div className="flex flex-col">
          <div className="my-4">
            <p className="text-[60px] md:text-[75px] font-bold font-heading uppercase text-white">
              Our
            </p>
            <p className="text-[60px] md:text-[75px] font-bold font-heading uppercase text-white -mt-6 md:-mt-8">
              Roadmap
            </p>
          </div>
          <Image src={car} alt="car" />
        </div>

        <div>
          <Image src={roadmap} alt="roadmap" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
