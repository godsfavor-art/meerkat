"use client"
import React, { useState } from 'react'
import Button from './ui/Button'
import { ArrowUpRight, ChevronRight, ChevronUp } from 'lucide-react'
import { motion, Variants } from "motion/react";

const faqs = [
  {
    question: "What makes milli different??",
    answer:
      "Milli represents a new standard in memecoin development - combining sophisticated tokenomics, enterprise-grade security, and a premium community experience. We focus on long-term value creation rather than quick speculation.",
  },
  {
    question: "How can i purcase Milli tokens",
    answer:
      "Both! Whether you’re a startup founder, a freelancer, a small business owner, or part of a large team, we offer solutions that fit your goals and budget.",
  },
  {
    question: "Is there a buy/sell tax? How is it used?",
    answer:
      "Timelines vary depending on the project scope, but most MVPs and websites take between 2 to 6 weeks. We'll always provide a clear timeline after discussing your requirements.",
  },
  {
    question: "What is the current price of Milli tokens?",
    answer:
      "No problem, we can pick up from where you left off, redesign, rebrand, or complete your product with better UX, functionality, and performance.",
  },
  {
    question: "Where can I view the transaction history for my tokens?",
    answer:
      "We tailor our pricing based on your project goals and scope. After an initial consultation, we’ll provide a transparent, no-surprise quote.",
  },
  {
    question: "Are there any limitations on the number of tokens I can buy?",
    answer:
      "We follow a proven design-to-development workflow, using tools like Figma, Trello, and Git for collaboration and updates. Every project goes through quality assurance before handoff.",
  },
  {
    question: "How can I transfer my Milli tokens to another wallet?",
    answer:
      "We follow a proven design-to-development workflow, using tools like Figma, Trello, and Git for collaboration and updates. Every project goes through quality assurance before handoff.",
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="bg-[#A184C4] py-24">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl py-1 px-3 w-[140px] flex justify-center items-center">
            <p className="text-base font-bold text-[#1F140D] font-heading uppercase pt-1.5 w-full text-center">
              Support
            </p>
          </div>
          <div className="my-4">
            <p className="text-[43px] md:text-[90px] text-center font-bold font-heading uppercase text-white">
              Frequently
            </p>
            <p className="text-[43px] md:text-[90px] text-center font-bold font-heading uppercase text-white -mt-6 md:-mt-12">
              Asked Questions
            </p>
          </div>
          <div className="">
            <Button
              variant="purple"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              BUY MILLI NOW
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
                className="w-full text-left p-3 font-body font-medium flex gap-4 items-center text-white text-xl focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl text-white">
                  {openIndex === index ? <ChevronUp /> : <ChevronRight />}
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
                  <p className="p-4 pt-0 text-white font-body text-lg font-normal ml-10">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Support