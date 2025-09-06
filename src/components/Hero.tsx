import { hero_main, hero_sub } from '@/utils/images';
import Image from 'next/image';
import React from 'react'
import * as motion from "motion/react-client";

const variants = {
  init: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeIn" },
};

const Hero = () => {
  return (
    <div className="bg-[#FFEBDC] w-full py-10">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col gap-0">
        <motion.p
          variants={variants}
          className="text-[40px] md:text-[96px] font-light font-body text-black"
        >
          Milli the
        </motion.p>
        <motion.p
          variants={variants}
          className="text-[60px] md:text-[160px] font-bold font-heading md:-mt-10 "
        >
          Meerkat
        </motion.p>
        <motion.p
          variants={variants}
          className="text-font-normal text-lg font-body md:w-[38%] md:-mt-10 text-justify"
        >
          Milli represents the convergence of sophisticated financial
          engineering and community-driven innovation. Every decision is
          deliberate, every feature purposeful.
        </motion.p>

        <motion.div
          variants={variants}
          className="mt-20 grid md:grid-cols-12 gap-4 pb-8"
        >
          <div className="md:col-span-9">
            <Image src={hero_main} alt="hero main" />
          </div>
          <motion.div
            variants={variants}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <Image src={hero_sub} alt="hero main" />
            <p className="text-xl font-medium text-right uppercase font-body">
              The most sophisticated meerkat in the crypto ecosystem. Combining
              luxury, community, and financial innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero