"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { IconShieldLock, IconUsers, IconMessageCircle, IconReceipt, IconUserCircle, IconStack2 } from "@tabler/icons-react";

const reasons = [
  { icon: IconShieldLock, title: "Конфіденційність", desc: "Гарантуємо повну конфіденційність" },
  { icon: IconUsers, title: "Досвідчені адвокати", desc: "Команда з багаторічним досвідом" },
  { icon: IconMessageCircle, title: "Чітка комунікація", desc: "Інформуємо про кожен крок" },
  { icon: IconReceipt, title: "Прозора вартість", desc: "Без прихованих платежів" },
  { icon: IconUserCircle, title: "Індивідуальний підхід", desc: "Оптимальне рішення для вас" },
  { icon: IconStack2, title: "Комплексний супровід", desc: "Весь процес від початку до кінця" },
];

export default function WhyUs() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Переваги</p>
          <h2 className="mb-12 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Чому обирають нас</h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((r) => (
            <StaggerItem key={r.title} className="flex">
              <div className="group flex flex-col h-full rounded-[28px] bg-obsidian p-7 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 w-full">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-graphite text-blue group-hover:scale-110 transition-transform duration-300">
                  <r.icon className="h-5 w-5" stroke={1.5} />
                </div>
                <h3 className="mb-1.5 text-frost font-semibold" style={{ fontSize: "17px", lineHeight: "1.21" }}>{r.title}</h3>
                <p className="text-platinum flex-1" style={{ fontSize: "14px", lineHeight: "1.43" }}>{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
