"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/Animations";

export default function CTA() {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,113,227,0.08)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
        <FadeUp>
          <h2 className="mb-6 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>
            Потрібна юридична допомога?
          </h2>
          <p className="mb-10 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>
            Запишіться на безкоштовну консультацію.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-paper hover:bg-blue/80 transition-all font-semibold shadow-[0_0_25px_rgba(0,113,227,0.35)] hover:shadow-[0_0_40px_rgba(0,113,227,0.5)]" style={{ fontSize: "15px" }}>Записатися</Link>
            </motion.div>
            <Link href="tel:+380441234567" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px" }}>+38 (044) 123-45-67 &rsaquo;</Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
