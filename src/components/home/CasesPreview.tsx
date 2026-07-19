"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const cases = [
  { title: "Спір із забудовником", metric: "2,4 млн", metricLabel: "грн стягнуто", bg: "bg-obsidian" },
  { title: "Зменшення штрафу", metric: "82%", metricLabel: "штраф зменшено", bg: "bg-graphite" },
  { title: "Корпоративний спір", metric: "Виграно", metricLabel: "справу", bg: "bg-obsidian" },
];

export default function CasesPreview() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Кейси</p>
              <h2 className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Успішні справи</h2>
            </div>
            <Link href="/cases" className="inline-flex items-center gap-1.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px" }}>Всі кейси &rsaquo;</Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cases.map((c, i) => (
            <StaggerItem key={i}>
              <div className={`rounded-[28px] ${c.bg} p-7 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 cursor-pointer`}>
                <h3 className="mb-5 text-frost font-semibold" style={{ fontSize: "17px", lineHeight: "1.21" }}>{c.title}</h3>
                <div className="text-green font-bold" style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.07" }}>{c.metric}</div>
                <p className="mt-1 text-platinum" style={{ fontSize: "14px" }}>{c.metricLabel}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-5 text-smoke text-center" style={{ fontSize: "10px" }}>* Демонстраційні дані.</p>
      </div>
    </section>
  );
}
