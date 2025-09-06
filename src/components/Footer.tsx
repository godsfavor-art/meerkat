import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { telegram, x } from '@/utils/icons';

const Footer = () => {
  return (
    <div className="bg-[#FFEBDC] py-24">
      <div className="w-10/12 mx-auto flex flex-col gap-4">
        <p className="text-[90px] font-light font-body text-black">Buy the</p>
        <p className="text-[160px] font-bold font-heading text-black -mt-10">
          Meerkat
        </p>

        <div className="flex items-center gap-4 -mt-10">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-[#4E342E1A]">
            <Image src={x} alt='x.com' />
          </div>
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-[#4E342E1A]">
            <Image src={telegram} alt='x.com' />
          </div>
        </div>

        <div className="mt-7">
          <Button
            variant="chocolate"
            size="md"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            BUY MILLI NOW
          </Button>
        </div>
      </div>
    </div>
  );};

export default Footer