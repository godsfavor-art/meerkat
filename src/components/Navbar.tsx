import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import CustomLink from '@/lib/PageAnimation';
import Image from 'next/image';
import { logo, telegram, x } from '@/utils/icons';
import ButtonSocials from './ui/Socials';

const menus = [
  {
    label: "About",
    url: "#about"
  },
  {
    label: "Tokenomics",
    url: "#tokenomics"
  },
  {
    label: "Roadmap ",
    url: "#roadmap "
  },
  {
    label: "Community",
    url: "#community"
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFCB7F] to-[#FFFEA5] py-8">
      <div className="w-10/12 mx-auto flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 md:gap-10">
          {menus.map((menu, i) => (
            <CustomLink
              url={menu.url}
              key={i}
              className="text-base font-medium text-black font-body"
            >
              {menu.label}
            </CustomLink>
          ))}
        </div>
        <div className="h-14 w-14 border-4 border-black rounded-full hidden md:block">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-6">
          <ButtonSocials
            variant="primary"
            size="md"
          >
            <Image src={x} alt="x-icon" />
          </ButtonSocials>
          <ButtonSocials
            variant="primary"
            size="md"
          >
            <Image src={telegram} alt="telegram-icon" />
          </ButtonSocials>
          <Button
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            BUY MILLI NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar