"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamMemberContent({ m }: { m: { name: string; role: string; exp: string; bio: string; education: string[]; experience: string[]; certificates: string[]; specialization: string[]; photo: string; reviews: { text: string; author: string }[]; articles: { title: string; date: string }[]; cases: { title: string; result: string }[] } }) {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <nav className="mb-6 text-smoke" style={{ fontSize: "10px" }}>
            <Link href="/" className="hover:text-platinum transition-colors">Головна</Link><span className="mx-2">/</span>
            <Link href="/team" className="hover:text-platinum transition-colors">Команда</Link><span className="mx-2">/</span>
            <span className="text-platinum">{m.name}</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="shrink-0 w-40 h-40 rounded-[28px] overflow-hidden shadow-xl shadow-black/50">
              <Image src={m.photo} alt={m.name} width={160} height={160} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="mb-2 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>{m.name}</h1>
              <p className="mb-2 text-platinum" style={{ fontSize: "17px" }}>{m.role}</p>
              <p className="mb-5 text-smoke" style={{ fontSize: "12px" }}>Стаж: {m.exp}</p>
              <p className="text-platinum mb-5 max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>{m.bio}</p>
              <div className="flex flex-wrap gap-2">
                {m.specialization.map((s) => <span key={s} className="rounded-full border border-orange/30 px-3 py-1 text-orange" style={{ fontSize: "12px" }}>{s}</span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[{ title: "Освіта", items: m.education }, { title: "Досвід", items: m.experience }, { title: "Сертифікати", items: m.certificates }].map((b) => (
              <div key={b.title} className="rounded-[28px] bg-obsidian p-6 border border-white/5">
                <h2 className="mb-3 text-frost font-semibold" style={{ fontSize: "17px" }}>{b.title}</h2>
                <ul className="space-y-2">{b.items.map((item, i) => <li key={i} className="text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon border-y border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Відгуки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {m.reviews.map((r, i) => (
              <div key={i} className="rounded-[28px] bg-obsidian p-6 border border-white/5">
                <div className="mb-3 text-orange" style={{ fontSize: "14px" }}>★★★★★</div>
                <p className="mb-3 text-frost font-medium" style={{ fontSize: "15px", lineHeight: "1.5" }}>&ldquo;{r.text}&rdquo;</p>
                <p className="text-platinum" style={{ fontSize: "12px" }}>— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Останні статті</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {m.articles.map((a, i) => (
              <div key={i} className="rounded-[28px] bg-obsidian p-6 border border-white/5 hover:bg-graphite transition-colors cursor-pointer">
                <h3 className="mb-1 text-frost font-semibold" style={{ fontSize: "17px" }}>{a.title}</h3>
                <p className="text-smoke" style={{ fontSize: "12px" }}>{a.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon border-y border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Кейси</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {m.cases.map((c, i) => (
              <div key={i} className="rounded-[28px] bg-obsidian p-6 border border-white/5">
                <h3 className="mb-2 text-frost font-semibold" style={{ fontSize: "17px" }}>{c.title}</h3>
                <div className="h-px bg-white/5 my-3" />
                <div className="text-green font-bold" style={{ fontSize: "24px" }}>{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Записатися на консультацію</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Отримайте професійну допомогу</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold shadow-[0_0_20px_rgba(0,113,227,0.3)]" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
