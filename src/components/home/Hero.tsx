"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,113,227,0.06)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-3 text-orange font-semibold"
              style={{ fontSize: "17px", letterSpacing: "-0.19px" }}
            >
              Юридичний захист
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-frost font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}
            >
              Захищаємо ваші
              <br />
              права з 2013 року
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-platinum max-w-md mx-auto lg:mx-0"
              style={{ fontSize: "17px", lineHeight: "1.47", letterSpacing: "-0.022em" }}
            >
              Юридичний захист для бізнесу та приватних клієнтів. Понад 500 виграних справ.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold shadow-[0_0_20px_rgba(0,113,227,0.3)] hover:shadow-[0_0_30px_rgba(0,113,227,0.5)]" style={{ fontSize: "14px", letterSpacing: "-0.022em" }}>Записатися</Link>
              <Link href="/practices" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px", letterSpacing: "-0.022em" }}>Наші послуги &rsaquo;</Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-lg hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-obsidian shadow-2xl shadow-black/50">
              <Image src="https://i.pravatar.cc/800?img=68" alt="Керуючий партнер" fill className="object-cover" sizes="500px" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
