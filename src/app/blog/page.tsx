"use client";

import { useState } from "react";
import Link from "next/link";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";

const categories = ["Всі", "Новини", "Статті", "Поради", "Судова практика"];
const articles = [
  { title: "Як подати позов до суду", excerpt: "Покрокова інструкція.", date: "15 грудня 2024", tag: "Статті", category: "Статті", readTime: "7 хв", author: "Марія Коваленко" },
  { title: "Що робити після ДТП", excerpt: "Юридичні поради.", date: "10 грудня 2024", tag: "Поради", category: "Поради", readTime: "5 хв", author: "Дмитро Шевченко" },
  { title: "Як оформити спадщину", excerpt: "Процедура в Україні.", date: "5 грудня 2024", tag: "Статті", category: "Статті", readTime: "8 хв", author: "Олександр Петренко" },
  { title: "Зміни в трудовому законодавстві", excerpt: "Огляд 2024.", date: "1 грудня 2024", tag: "Новини", category: "Новини", readTime: "4 хв", author: "Анна Мельник" },
  { title: "Захист бізнесу від шахраїв", excerpt: "Поради.", date: "28 листопада 2024", tag: "Поради", category: "Поради", readTime: "6 хв", author: "Ігор Бондаренко" },
  { title: "Судова практика з податкових спорів", excerpt: "Аналіз.", date: "25 листопада 2024", tag: "Судова практика", category: "Судова практика", readTime: "10 хв", author: "Анна Мельник" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const [search, setSearch] = useState("");
  const filtered = articles.filter((a) => (activeCategory === "Всі" || a.category === activeCategory) && (a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())));
  const popular = articles.filter((a) => a.readTime === "7 хв" || a.readTime === "8 хв" || a.readTime === "10 хв");

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Блог</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Блог</h1>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-smoke" stroke={2} />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Пошук статей..." className="w-full rounded-full bg-obsidian border border-white/10 pl-10 pr-4 py-2.5 text-frost focus:border-blue focus:outline-none transition-colors placeholder:text-smoke" style={{ fontSize: "14px" }} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full border px-4 py-1.5 transition-all font-medium ${activeCategory === cat ? "bg-orange text-paper border-orange" : "border-orange/30 text-orange hover:bg-orange/10"}`} style={{ fontSize: "13px" }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtered.map((a, i) => (
                  <article key={i} className="group rounded-[28px] bg-obsidian p-7 hover:bg-graphite transition-all">
                    <span className="inline-block rounded-full border border-orange/30 px-2.5 py-0.5 text-orange mb-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{a.tag}</span>
                    <h2 className="mb-2 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "19px", lineHeight: "1.21" }}>{a.title}</h2>
                    <p className="mb-3 text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{a.excerpt}</p>
                    <div className="flex items-center gap-3 text-smoke" style={{ fontSize: "11px" }}>
                      <span>{a.date}</span><span>· {a.readTime}</span><span>· {a.author}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-frost font-semibold" style={{ fontSize: "17px" }}>🔥 Найпопулярніше</h3>
              <div className="space-y-2.5">
                {popular.map((a, i) => (
                  <div key={i} className="rounded-[28px] bg-obsidian p-4 hover:bg-graphite transition-all cursor-pointer">
                    <h4 className="mb-1 text-frost font-semibold" style={{ fontSize: "14px" }}>{a.title}</h4>
                    <p className="text-smoke" style={{ fontSize: "11px" }}>{a.readTime} · {a.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Не знайшли відповідь?</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Запишіться на консультацію</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
