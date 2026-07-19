"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const categories = ["Всі", "Сімейне", "Податкове", "Корпоративне", "Кримінальне", "Нерухомість"];
const cases = [
  { title: "Спір із забудовником", task: "Недотримання строків.", solution: "Аналіз, позов, представництво.", metric: "2,4 млн", metricLabel: "грн стягнуто", cat: "Нерухомість" },
  { title: "Сімейна справа", task: "Поділ майна.", solution: "Докази, експертиза, суд.", metric: "Виграно", metricLabel: "справу", cat: "Сімейне" },
  { title: "Корпоративний спір", task: "Спор між учасниками.", solution: "Переговори, мирова.", metric: "Виграно", metricLabel: "на користь", cat: "Корпоративне" },
  { title: "Податкова перевірка", task: "Донарахування 1.2 млн.", solution: "Оскарження, суд.", metric: "82%", metricLabel: "штраф зменшено", cat: "Податкове" },
  { title: "Кримінальна справа", task: "Підозра у шахрайстві.", solution: "Аналіз, захист.", metric: "Закрито", metricLabel: "провадження", cat: "Кримінальне" },
  { title: "Земельний спір", task: "Спор з сусідом.", solution: "Експертиза, суд.", metric: "Виграно", metricLabel: "права захищено", cat: "Нерухомість" },
];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const filtered = activeCategory === "Всі" ? cases : cases.filter((c) => c.cat === activeCategory);

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Кейси</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Успішні кейси</h1>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 pt-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full border px-4 py-1.5 transition-all font-medium ${activeCategory === cat ? "bg-orange text-paper border-orange" : "border-orange/30 text-orange hover:bg-orange/10"}`} style={{ fontSize: "13px" }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <p className="mb-6 text-smoke text-center" style={{ fontSize: "10px" }}>* Демонстраційні дані.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((c, i) => (
              <div key={i} className="group rounded-[28px] bg-obsidian p-7 hover:bg-graphite transition-all cursor-pointer">
                <h2 className="mb-4 text-frost font-semibold" style={{ fontSize: "17px" }}>{c.title}</h2>
                <div className="mb-2"><p className="mb-1 text-smoke" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Задача</p><p className="text-platinum" style={{ fontSize: "14px" }}>{c.task}</p></div>
                <div className="h-px bg-white/5 my-3" />
                <div className="mb-3"><p className="mb-1 text-smoke" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Рішення</p><p className="text-platinum" style={{ fontSize: "14px" }}>{c.solution}</p></div>
                <div className="h-px bg-white/5 my-3" />
                <div className="text-green font-bold" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>{c.metric}</div>
                <p className="mt-1 mb-4 text-smoke" style={{ fontSize: "12px" }}>{c.metricLabel}</p>
                <span className="inline-flex items-center gap-1.5 text-halo font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: "13px" }}>Переглянути кейс <IconArrowRight className="h-3 w-3" stroke={2} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Хочете такий же результат?</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Зверніться до нас</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
