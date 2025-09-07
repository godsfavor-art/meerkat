"use client"
import React, { useState } from 'react'
import Button from './ui/Button';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import CustomLink from '@/lib/PageAnimation';
import Image from 'next/image';
import { logo, telegram, x } from '@/utils/icons';
import ButtonSocials from './ui/Socials';
import useComingSoonModal from '@/hooks/useComingSoonModal';
import ComingSoonModal from './ui/ComingSoonModal';
import Link from 'next/link';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, openModal, closeModal } = useComingSoonModal();
  return (
    <div className="bg-gradient-to-r from-[#FFCB7F] to-[#FFFEA5] py-8 relative">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo - only visible on mobile */}
          <div className="h-14 w-14 border-4 border-black rounded-full lg:hidden">
            <Image src={logo} alt="logo" />
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex w-full items-center justify-between">
            <div className="flex items-center gap-10">
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

            <div className="h-14 w-14 border-4 border-black rounded-full">
              <Image src={logo} alt="logo" />
            </div>

            <div className="flex items-center gap-6">
              <Link href={""}>
                <ButtonSocials variant="primary" size="md">
                  <Image src={x} alt="x-icon" />
                </ButtonSocials>
              </Link>
              <Link href={""}>
                <ButtonSocials variant="primary" size="md">
                  <Image src={telegram} alt="telegram-icon" />
                </ButtonSocials>
              </Link>
              <Button
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
                onClick={openModal}
              >
                Buy Otterio Now
              </Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-[#FFCB7F] to-[#FFFEA5] border-t-2 border-black z-50 h-full">
            <div className="p-6 flex justify-between items-center">
              <div className="h-14 w-14 border-4 border-black rounded-full">
                <Image src={logo} alt="logo" />
              </div>
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="flex flex-col p-6 gap-4">
              {menus.map((menu, i) => (
                <CustomLink
                  url={menu.url}
                  key={i}
                  className="text-base font-medium text-black py-2"
                  setShowMenu={setIsMenuOpen}
                >
                  {menu.label}
                </CustomLink>
              ))}
              <div className="flex items-center gap-7 my-4">
                <ButtonSocials variant="primary" size="md">
                  <Image src={x} alt="x-icon" />
                </ButtonSocials>
                <ButtonSocials variant="primary" size="md">
                  <Image src={telegram} alt="telegram-icon" />
                </ButtonSocials>
              </div>
              <Button
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
                onClick={openModal}
              >
                Buy Otterio Now
              </Button>
            </div>
          </div>
        )}
      </div>

      <ComingSoonModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default Navbar