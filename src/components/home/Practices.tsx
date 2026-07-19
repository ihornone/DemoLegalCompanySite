"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const practices = [
  { icon: "⚖️", title: "Сімейне право", desc: "Розлучення, аліменти, поділ майна, захист прав дитини", href: "/practices/family" },
  { icon: "📜", title: "Цивільне право", desc: "Спори, відшкодування збитків, спадщина", href: "/practices/civil" },
  { icon: "⚖️", title: "Кримінальне право", desc: "Захист, оскарження вироків", href: "/practices/criminal" },
  { icon: "🏢", title: "Корпоративне право", desc: "Створення компаній, спори, M&A", href: "/practices/corporate" },
  { icon: "🏠", title: "Нерухомість", desc: "Забудовники, оформлення прав", href: "/practices/real-estate" },
  { icon: "💰", title: "Податкове право", desc: "Перевірки, оскарження, консультації", href: "/practices/tax" },
];

export default function Practices() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
        <FadeUp>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Практики</p>
              <h2 className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Юридичні послуги</h2>
            </div>
            <Link href="/practices" className="inline-flex items-center gap-1.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px" }}>Всі послуги &rsaquo;</Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {practices.map((p) => (
            <StaggerItem key={p.href} className="flex">
              <Link href={p.href} className="group flex flex-col h-full rounded-[28px] bg-obsidian p-7 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 w-full">
                <div className="mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="mb-2 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "19px", lineHeight: "1.21", letterSpacing: "-0.028em" }}>{p.title}</h3>
                <p className="text-platinum mb-4 flex-1" style={{ fontSize: "14px", lineHeight: "1.43" }}>{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-halo font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto" style={{ fontSize: "14px" }}>Детальніше <IconArrowRight className="h-3.5 w-3.5" stroke={2} /></span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
