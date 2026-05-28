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
    question: "How much does a premium interior project usually cost?",
    answer: "Every home is different based on scope, materials, and requirements. During the consultation, we help you understand realistic investment ranges clearly."
  },
  {
    question: "Do you handle execution as well?",
    answer: "Yes. Interior Alchemist manages both design and execution to ensure consistency, coordination, and quality control."
  },
  {
    question: "How long does the process take?",
    answer: "Timelines depend on project size and complexity. A structured execution roadmap is shared before work begins."
  },
  {
    question: "Will I receive regular updates?",
    answer: "Yes. We maintain transparent communication and project updates throughout the process."
  },
  {
    question: "Can you work within my preferred style?",
    answer: "Absolutely. The design process is tailored around your lifestyle, preferences, and functional needs."
  },
  {
    question: "What makes Interior Alchemist different?",
    answer: "We focus not only on creating visually refined interiors, but also on delivering a thoughtful, organized, and professionally managed experience from start to finish."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto relative overflow-hidden" id="faq">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c5a880]/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          FAQ
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">Frequently Asked Questions</h2>
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
              className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.04] rounded-2xl px-6 data-[state=open]:bg-white/[0.03] data-[state=open]:border-[#c5a880]/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline py-6 text-white/90 hover:text-white transition-colors aria-expanded:text-[#c5a880]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-6 font-light">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
