import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Timeline from './Timeline';

const OurRoadmap = () => {
  return (
    <div className="bg-black py-24" id="roadmap">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full h-8 px-2 w-[140px] flex justify-center items-center">
            <p className="text-base font-bold text-[#1F140D] font-heading uppercase pt-1.5 w-full text-center">
              Development
            </p>
          </div>
          <div className="my-4">
            <p className="text-[60px] md:text-[90px] text-center font-bold font-heading uppercase text-white">
              Our
            </p>
            <p className="text-[60px] md:text-[90px] text-center font-bold font-heading uppercase text-white -mt-6 md:-mt-12">
              Roadmap
            </p>
          </div>
          <div className="">
            <Button
              variant="blue"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Buy Otterio Now
            </Button>
          </div>
        </div>

        <Timeline />
      </div>
    </div>
  );
}

export default OurRoadmap