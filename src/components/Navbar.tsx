import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import CustomLink from '@/lib/PageAnimation';

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
    <div className="bg-[#FFEBDC] py-8">
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
        <div className="h-14 w-14 bg-black rounded-full hidden md:block"></div>
        <Button
          variant="primary"
          size="md"
          icon={ArrowUpRight}
          iconPosition="right"
          //   {...props}
        >
          BUY MILLI NOW
        </Button>
      </div>
    </div>
  );
}

export default Navbar