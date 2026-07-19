"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { FadeUp } from "@/components/Animations";

const faqs = [
  { q: "Скільки коштує консультація?", a: "Первинна консультація — безкоштовна." },
  { q: "Скільки триває справа?", a: "Консультації — від 30 хвилин. Судові — від місяців до років." },
  { q: "Чи можна онлайн?", a: "Так, через Zoom, Telegram, Viber." },
  { q: "Які документи потрібні?", a: "Візьміть усі документи, пов'язані зі справою." },
];

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[800px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp className="text-center mb-12">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>FAQ</p>
          <h2 className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Часті питання</h2>
        </FadeUp>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-[28px] bg-obsidian border border-white/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left text-frost hover:bg-graphite/50 transition-colors" style={{ fontSize: "17px" }}>
                <span className="font-semibold pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <IconChevronDown className="h-4 w-4 text-platinum" stroke={2} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
