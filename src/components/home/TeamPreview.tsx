"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const team = [
  { name: "Олександр Петренко", role: "Керуючий партнер", exp: "15+ років", slug: "petrenko", spec: "Корпоративне право", photo: "https://i.pravatar.cc/400?img=68" },
  { name: "Марія Коваленко", role: "Старший адвокат", exp: "12+ років", slug: "kovalenko", spec: "Сімейне право", photo: "https://i.pravatar.cc/400?img=45" },
  { name: "Дмитро Шевченко", role: "Адвокат", exp: "8+ років", slug: "shevchenko", spec: "Кримінальне право", photo: "https://i.pravatar.cc/400?img=53" },
  { name: "Анна Мельник", role: "Юрист", exp: "5+ років", slug: "melnyk", spec: "Податкове право", photo: "https://i.pravatar.cc/400?img=47" },
];

export default function TeamPreview() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Команда</p>
              <h2 className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Наші адвокати</h2>
            </div>
            <Link href="/team" className="inline-flex items-center gap-1.5 text-halo hover:text-frost transition-colors font-semibold" style={{ fontSize: "14px" }}>Вся команда &rsaquo;</Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {team.map((member) => (
            <StaggerItem key={member.slug}>
              <Link href={`/team/${member.slug}`} className="group block rounded-[28px] bg-obsidian overflow-hidden border border-white/5 hover:border-white/10 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={member.photo} alt={member.name} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1.5 text-paper font-semibold" style={{ fontSize: "13px" }}>Переглянути профіль <IconArrowRight className="h-3 w-3" stroke={2} /></span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-0.5 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "14px" }}>{member.name}</h3>
                  <p className="text-platinum" style={{ fontSize: "12px" }}>{member.role}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
