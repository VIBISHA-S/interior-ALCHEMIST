"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is your design process?",
    answer: "Our process begins with a comprehensive consultation to understand your vision, followed by concept development, detailed planning, and seamless execution. We ensure open communication at every step."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, our team has extensive experience in both high-end residential homes and premium commercial spaces, including offices, boutiques, and hospitality venues."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and scale. A typical residential remodel might take 3-6 months, while full architectural builds can take 12-18 months. We provide detailed schedules during the planning phase."
  },
  {
    question: "Can you work within a specific budget?",
    answer: "Absolutely. We pride ourselves on transparent pricing and will work with you to maximize value within your specified budget parameters while maintaining our high quality standards."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          FAQ
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">Frequently asked questions</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#111111] border border-gray-800 rounded-2xl px-6 data-[state=open]:bg-[#161616] transition-colors"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
