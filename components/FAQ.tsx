"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What are surplus funds?",
    a: "When a property is sold at foreclosure or tax deed auction for more than what was owed, the remaining balance is called surplus funds. That money legally belongs to the former property owner or their heirs — but many people never know it exists.",
  },
  {
    q: "How do I know if I'm owed money?",
    a: "If you or a family member lost a property to foreclosure or a tax deed sale in the past several years, there may be funds sitting unclaimed with the court. We research your case at no cost to determine if a claim exists.",
  },
  {
    q: "What does it cost me upfront?",
    a: "Nothing. We work on a contingency basis — we only get paid when you do. There are no upfront fees, retainers, or out of pocket costs.",
  },
  {
    q: "How long does the process take?",
    a: "Most claims are completed within 60 to 120 days depending on the state and county. Some cases move faster. We keep you updated throughout the process.",
  },
  {
    q: "Do I need a lawyer?",
    a: "In some states an attorney is required to file the claim. We coordinate that on your behalf at no additional cost to you. You will never be surprised by a bill.",
  },
  {
    q: "Is this legitimate?",
    a: "Yes. Surplus fund recovery is a legal and regulated industry. We operate under Operation Profit LLC, a registered limited liability company. Your funds are real, your right to them is real, and our job is simply to help you collect what you are already owed.",
  },
  {
    q: "What states do you operate in?",
    a: "We currently serve claimants in 45+ states nationwide and are actively expanding coverage. Contact us and we will confirm availability in your specific state and county.",
  },
];

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="#DABD59"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function AccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-body text-white text-lg font-semibold group-hover:text-gold transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <Chevron isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-body text-gray-400 text-base leading-relaxed font-light pb-5 pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="bg-black py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
            Common Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="border border-white/10 px-6 md:px-10">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
