"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const articles = [
  { title: "Як подати позов до суду", excerpt: "Покрокова інструкція.", date: "15 грудня 2024", tag: "Статті", readTime: "7 хв", author: "Марія Коваленко" },
  { title: "Що робити після ДТП", excerpt: "Юридичні поради.", date: "10 грудня 2024", tag: "Поради", readTime: "5 хв", author: "Дмитро Шевченко" },
  { title: "Як оформити спадщину", excerpt: "Процедура в Україні.", date: "5 грудня 2024", tag: "Статті", readTime: "8 хв", author: "Олександр Петренко" },
];

export default function BlogPreview() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Блог</p>
              <h2 className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Останні статті</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px" }}>Всі статті &rsaquo;</Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {articles.map((a, i) => (
            <StaggerItem key={i}>
              <Link href="/blog" className="group block rounded-[28px] bg-obsidian p-7 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300">
                <span className="inline-block rounded-full border border-orange/30 px-2.5 py-0.5 text-orange mb-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{a.tag}</span>
                <h3 className="mb-2 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "19px", lineHeight: "1.21" }}>{a.title}</h3>
                <p className="mb-3 text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{a.excerpt}</p>
                <div className="flex items-center gap-3 text-smoke" style={{ fontSize: "11px" }}>
                  <span>{a.date}</span><span>· {a.readTime}</span><span>· {a.author}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
