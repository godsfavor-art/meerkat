import { check } from "@/utils/icons";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { ArrowUpRight } from "lucide-react";

const data = [
  "Otterio: It's not just a meme, it's a lifestyle.",
  "Built on Solana. Fueled by fun. Otternomics for the future.",
];

const About = () => {
  return (
    <div className="bg-[#7BAF92] py-24 about_img" id="about">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-14 md:gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-[#BCECFC] rounded-full h-8 px-2 w-[80px] flex justify-center items-center">
            <p className="text-base font-bold font-heading uppercase pt-1.5">
              About
            </p>
          </div>
          <div>
            <p className="text-[60px] md:text-[96px] font-bold font-heading uppercase text-black">
              Built on
            </p>
            <p className="text-[60px] md:text-[96px] font-bold font-heading uppercase text-black -mt-6 md:-mt-12">
              Solana
            </p>
          </div>
          <p className="text-lg font-normal font-body text-black -mt-6 md:w-[87%]">
            Bridges real otter behavior, playful, social, obsessed with
            <br className="hidden md:block" /> shiny stuff, with crypto
            archetypes. Built Otternaut
            <br className="hidden md:block" /> profile pics, DAO culture, etc
          </p>

          <div className="flex flex-col gap-4 md:w-[75%] mt-1">
            {data.map((data, i) => (
              <div className="flex gap-4 items-center" key={i}>
                <Image src={check} alt="check imag" />
                <p className="text-lg font-normsl font-body text-black">
                  {data}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              BUY MILLI NOW
            </Button>
          </div>
        </div>

        <div></div>
        {/* <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-center items-center w-full">
            <Image
              src={about_tree}
              alt="about tree"
              className="flex justify-center items-center w-full md:ml-10"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
