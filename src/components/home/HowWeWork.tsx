"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/Animations";

const steps = [
  { num: "01", title: "Звернення", desc: "Залиште заявку або зателефонуйте" },
  { num: "02", title: "Консультація", desc: "Безкоштовно оцінимо ситуацію" },
  { num: "03", title: "Рішення", desc: "Розробимо стратегію та план" },
  { num: "04", title: "Результат", desc: "Ведемо до позитивного вирішення" },
];

export default function HowWeWork() {
  return (
    <section className="bg-carbon">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Процес</p>
          <h2 className="mb-14 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Як ми працюємо</h2>
        </FadeUp>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 hidden md:block">
            <motion.div
              className="w-full bg-blue"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-paper font-bold" style={{ fontSize: "14px" }}>{step.num}</div>
                {i < steps.length - 1 && <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] text-center"><span className="text-smoke" style={{ fontSize: "16px" }}>→</span></div>}
                <div className="md:mt-4">
                  <h3 className="mb-1 text-frost font-semibold" style={{ fontSize: "17px", lineHeight: "1.21" }}>{step.title}</h3>
                  <p className="text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
