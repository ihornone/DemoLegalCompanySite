"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { text: "Дуже задоволена роботою команди. Вирішили мою сімейну справу швидко та професійно.", author: "Олена К.", role: "Клієнт, сімейне право", photo: "https://i.pravatar.cc/100?img=5" },
  { text: "Професійний підхід та чітка комунікація. Завжди були на зв'язку.", author: "Ігор М.", role: "Клієнт, корпоративне право", photo: "https://i.pravatar.cc/100?img=12" },
  { text: "Звернувся з корпоративним питанням. Вирішили все максимально ефективно.", author: "Андрій В.", role: "Директор ТОВ", photo: "https://i.pravatar.cc/100?img=14" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-carbon">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Відгуки</p>
        <h2 className="mb-12 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Що кажуть наші клієнти</h2>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-[28px] bg-obsidian p-7 border border-white/5 hover:border-white/10 transition-all">
              <div className="mb-2 flex items-center gap-1.5 text-orange" style={{ fontSize: "12px" }}>Google Reviews ★★★★★</div>
              <p className="mb-5 text-frost font-medium" style={{ fontSize: "15px", lineHeight: "1.5" }}>&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0"><Image src={t.photo} alt={t.author} fill className="object-cover" sizes="36px" /></div>
                <div>
                  <div className="text-frost font-semibold" style={{ fontSize: "13px" }}>{t.author}</div>
                  <div className="text-platinum" style={{ fontSize: "11px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="rounded-[28px] bg-obsidian p-7 border border-white/5">
            <div className="mb-2 flex items-center gap-1.5 text-orange" style={{ fontSize: "12px" }}>Google Reviews ★★★★★</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-5 text-frost font-medium" style={{ fontSize: "15px", lineHeight: "1.5" }}>&ldquo;{testimonials[current].text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0"><Image src={testimonials[current].photo} alt={testimonials[current].author} fill className="object-cover" sizes="36px" /></div>
                  <div>
                    <div className="text-frost font-semibold" style={{ fontSize: "13px" }}>{testimonials[current].author}</div>
                    <div className="text-platinum" style={{ fontSize: "11px" }}>{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex justify-center gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 w-2 rounded-full transition-all duration-300 ${i === current ? "bg-blue w-6" : "bg-smoke hover:bg-platinum"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
