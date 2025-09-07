import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { check } from '@/utils/icons';

const data = [
  {
    title: "Liquidity Pool",
    percentage: "80",
    tokens: 800,
    color: "#ffffff",
  },
  {
    title: "Marketing & Growth",
    percentage: "15",
    tokens: 150,
    color: "#19B820",
  },
  {
    title: "Team (Vested)",
    percentage: "5",
    tokens: 50,
    color: "#FCC800",
  },
];

const EconomicModel = () => {
  return (
    <div className="bg-[#C14432] py-24" id="tokenomics">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 items-center gap-14 md:gap-8">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-full h-8 px-2 w-[165px] flex justify-center items-center">
            <p className="text-base font-bold font-heading uppercase pt-1.5 w-full text-center">
              Economic Model
            </p>
          </div>
          <div>
            <p className="text-[60px] md:text-[90px] font-bold font-heading uppercase text-white">
              Sustainable
            </p>
            <p className="text-[60px] md:text-[90px] font-bold font-heading uppercase text-white -mt-6 md:-mt-12">
              Tokenomics
            </p>
          </div>

          <div className="text-lg font-normal font-heading text-white -mt-6">
            <div className="">
              <div className="flex">
                <div className="relative">
                  <svg
                    width="250"
                    height="250"
                    viewBox="0 0 200 200"
                    className="transform -rotate-90"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="rgba(255,255,255,1)"
                      stroke-width="20"
                    />

                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="20"
                      stroke-dasharray="50.6 460.05"
                      stroke-dashoffset="-105"
                      className="transition-all duration-500 hover:stroke-width-[24]"
                    />

                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#EAB308"
                      stroke-width="20"
                      stroke-dasharray="55.4 447.25"
                      stroke-dashoffset="-155.6"
                      className="transition-all duration-500 hover:stroke-width-[24]"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-4xl font-bold mb-1">1B</div>
                    <div className="text-sm font-medium font-body tracking-wider">
                      TOTAL SUPPLY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="orange"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Buy Otterio Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-4">
          {data.map((item, i) => (
            <div
              className="bg-white/5 rounded-[30px] border border-white/20 p-5"
              key={i}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={check} alt="check" />
                  <p className="text-xl font-body font-normal text-white">
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[40px] uppercase font-bold font-heading text-white">
                    {item.percentage}%
                  </p>
                  <p className="text-xl uppercase font-semibold font-body text-white -mt-5">
                    {item.tokens}M TOkens
                  </p>
                </div>
              </div>

              <div className="w-full h-3 bg-white/40 rounded-[100px] overflow-hidden mt-7 mb-5">
                <div
                  style={{
                    backgroundColor: item.color,
                    width: `${item.percentage}%`,
                  }}
                  className="h-full"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EconomicModel