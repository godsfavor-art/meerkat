import { check } from "@/utils/icons";
import { about_tree } from "@/utils/images";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { ArrowUpRight } from "lucide-react";

const data = [
  "Built on Solana's blockchain with optimized contracts for low fees and high speed.",
  "Tokenomics with deflationary mechanisms and community incentives for growth.",
];

const About = () => {
  return (
    <div className="bg-[#7BAF92] py-24" id="about">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-14 md:gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl py-1 px-3 w-[80px] flex justify-center items-center">
            <p className="text-base font-bold font-heading uppercase pt-1.5">
              About
            </p>
          </div>
          <div>
            <p className="text-[60px] md:text-[96px] font-bold font-heading uppercase text-white">
              Engineered
            </p>
            <p className="text-[60px] md:text-[96px] font-bold font-heading uppercase text-white -mt-6 md:-mt-12">
              Excellence
            </p>
          </div>
          <p className="text-lg font-normal font-body text-white -mt-6 md:w-[83%]">
            Milli represents the convergence of sophisticated <br className="hidden md:block" /> financial
            engineering and community-driven innovation. Every decision is
            deliberate, every feature purposeful.
          </p>

          <div className="flex flex-col gap-4 md:w-[75%] mt-3">
            {data.map((data, i) => (
              <div className="flex gap-4 items-center" key={i}>
                <Image src={check} alt="check imag" />
                <p className="text-lg font-normsl font-body text-white">
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

        <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-center items-center w-full">
            <Image
              src={about_tree}
              alt="about tree"
              className="flex justify-center items-center w-full md:ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
