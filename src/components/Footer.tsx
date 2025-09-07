import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { logo, telegram, x } from '@/utils/icons';
import ButtonSocials from './ui/Socials';

const Footer = () => {
  return (
    <div className="bg-[#FFBB54] py-24">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-4">
        <div className="h-[74px] w-[74px] border-4 border-[#112F47] rounded-full">
          <Image src={logo} alt="logo" className="cover w-full h-full" />
        </div>

        <div className="flex items-center gap-8 mt-8">
          <ButtonSocials variant="primary" size="md">
            <Image src={x} alt="x-icon" />
          </ButtonSocials>
          <ButtonSocials variant="primary" size="md">
            <Image src={telegram} alt="telegram-icon" />
          </ButtonSocials>
        </div>
        <p className="text-[40px] md:text-[96px] mt-5 font-light font-heading text-black uppercase">
          Join the
        </p>
        <p className="text-[40px] md:text-[96px]  font-bold font-heading text-black -mt-5 md:-mt-10">
          Lodge
        </p>

        <div className="mt-1">
          <Button
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Buy Otterio Now
          </Button>
        </div>
      </div>
    </div>
  );};

export default Footer