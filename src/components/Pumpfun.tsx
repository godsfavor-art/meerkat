import React from 'react'
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { pumpfun, total_supply } from '@/utils/icons';

const Pumpfun = () => {
  return (
    <div className="bg-[#218152] py-24" id="tokenomics">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 items-center gap-14 md:gap-8">
        <div className="flex flex-col gap-4">
          {/* <div className="bg-white rounded-full h-8 px-2 w-[165px] flex justify-center items-center">
            <p className="text-base font-bold font-heading uppercase pt-1.5 w-full text-center">
              Economic Model
            </p>
          </div> */}
          <div>
            <p className="text-[60px] md:text-[90px] font-bold font-heading uppercase text-white">
              Sustainable
            </p>
            <p className="text-[60px] md:text-[90px] font-bold font-heading uppercase text-white -mt-6 md:-mt-12">
              Tokenomics
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-5 mt-6">
            <Image src={total_supply} alt="total_supply" className='hidden md:flex justify-center' />
            <div className="md:hidden flex justify-center items-center">
              <Image src={total_supply} alt="total_supply" className='flex justify-center' />
            </div>
            <Button
              variant="orange"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              BUY MILLI NOW
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-4">
          <Image src={pumpfun} alt="pumpfun" />
        </div>
      </div>
    </div>
  );
}

export default Pumpfun