"use client"
import React, { useState } from 'react'
import Button from './ui/Button'
import { ArrowUpRight, ChevronRight, ChevronUp } from 'lucide-react'
import { motion, Variants } from "motion/react";
import ComingSoonModal from './ui/ComingSoonModal';
import useComingSoonModal from '@/hooks/useComingSoonModal';

const faqs = [
  {
    question: "Where is Otterio Launched",
    answer: "Otterio is launched on pump fun and it’s trading on pump swap",
  },
  {
    question: "How can i purchase Otterio tokens",
    answer:
      "You can purchase Otterio from any meme coin trading platform on Solana",
  },
  {
    question: "Are there any limitations on the number of tokens I can buy?",
    answer: "There's no limit to the number of tokens you can purchase",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Support = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isOpen, openModal, closeModal } = useComingSoonModal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="bg-[#FFBB54] py-24">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full h-8 px-2 w-[100px] flex justify-center items-center">
            <p className="text-base font-bold text-[#1F140D] font-heading uppercase pt-1.5 w-full text-center">
              Support
            </p>
          </div>
          <div className="my-4">
            <p className="text-[43px] md:text-[90px] text-center font-bold font-heading uppercase">
              Frequently
            </p>
            <p className="text-[43px] md:text-[90px] text-center font-bold font-heading uppercase -mt-6 md:-mt-12">
              Asked Questions
            </p>
          </div>
          <div className="">
            <Button
              variant="purple"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
              onClick={openModal}
            >
              Buy Otterio Now
            </Button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 md:w-8/12 mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-white/15 py-1 pb-2"
            >
              {/* Question Button */}
              <button
                className="w-full text-left p-3 font-body font-medium flex gap-4 items-center text-black text-xl focus:outline-none capitalize"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl text-black">
                  {openIndex === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </span>
                {faq.question}
              </button>

              {/* Animated Answer */}
              <motion.div
                initial={false}
                animate={openIndex === index ? "open" : "closed"}
                variants={{
                  open: {
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: "easeOut" },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  },
                  closed: {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: "easeOut" },
                      opacity: { duration: 0.1 },
                    },
                  },
                }}
                style={{ overflow: "hidden" }}
              >
                {openIndex === index && (
                  <p className="p-4 pt-0 text-black font-body text-lg font-normal ml-10">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ComingSoonModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default Support