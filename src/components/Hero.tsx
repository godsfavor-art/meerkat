import { hero_main } from '@/utils/images';
import Image from 'next/image';
import React from 'react'
import * as motion from "motion/react-client";
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  init: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeIn" },
};

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFCB7F] to-[#FFFEA5] w-full pt-10">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col gap-0">
        <motion.p
          variants={variants}
          className="text-[40px] md:text-[96px] font-light font-heading text-black uppercase"
        >
          The Otterio
        </motion.p>
        <motion.p
          variants={variants}
          className="text-[40px] md:text-[96px] font-bold font-heading md:-mt-10 "
        >
          Uprising: From
        </motion.p>
        <motion.p
          variants={variants}
          className="text-[40px] md:text-[96px] font-bold font-heading md:-mt-10 "
        >
          Riverbank to
        </motion.p>
        <motion.p
          variants={variants}
          className="text-[40px] md:text-[96px] font-bold font-heading md:-mt-10 "
        >
          Solana
        </motion.p>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto mt-4 mb-10 flex flex-col md:flex-row md:items-center gap-8">
        <Button
          variant="secondary"
          size="md"
          icon={ArrowUpRight}
          iconPosition="right"
        >
          Buy Otterio Now
        </Button>
        <Button
          variant="primary"
          size="md"
          icon={ArrowUpRight}
          iconPosition="right"
        >
          Join Community
        </Button>
      </div>

      <motion.div variants={variants}>
        <Image src={hero_main} alt="hero main" />
      </motion.div>
    </div>
  );
}

export default Hero