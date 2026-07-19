"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { IconClock, IconVideo, IconBuilding, IconCheck, IconPhone, IconMail, IconBrandTelegram } from "@tabler/icons-react";

export default function OnlineConsultation() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <FadeUp className="flex-1">
            <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Онлайн-консультація</p>
            <h2 className="mb-6 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>
              30 хвилин
              <br />
              <span className="text-blue">Безкоштовно</span>
            </h2>
            <p className="mb-8 text-platinum max-w-md" style={{ fontSize: "17px", lineHeight: "1.47" }}>
              Отримайте першу консультацію юриста безкоштовно.
            </p>
            <div className="mb-8 space-y-3">
              {["Аналіз ситуації", "Оцінка перспектив", "Рекомендації", "Оцінка вартості"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-blue shrink-0" stroke={3} />
                  <span className="text-platinum" style={{ fontSize: "14px" }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold shadow-[0_0_20px_rgba(0,113,227,0.3)] hover:shadow-[0_0_30px_rgba(0,113,227,0.5)]" style={{ fontSize: "14px" }}>Записатися</a>
          </FadeUp>

          <StaggerContainer className="flex-1 w-full max-w-md space-y-2.5">
            {[
              { icon: IconClock, title: "Від 30 хвилин", desc: "Зручний час" },
              { icon: IconVideo, title: "Онлайн", desc: "Zoom, Google Meet" },
              { icon: IconBuilding, title: "Офлайн", desc: "Центр Києва" },
              { icon: IconPhone, title: "Телефон", desc: "+38 (044) 123-45-67" },
              { icon: IconMail, title: "Email", desc: "info@legal.ua" },
              { icon: IconBrandTelegram, title: "Telegram / Viber", desc: "Напишіть нам" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-center gap-4 rounded-[28px] bg-obsidian p-4 border border-white/5 hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graphite text-blue">
                    <item.icon className="h-5 w-5" stroke={1.5} />
                  </div>
                  <div>
                    <div className="text-frost font-semibold" style={{ fontSize: "14px" }}>{item.title}</div>
                    <div className="text-platinum" style={{ fontSize: "12px" }}>{item.desc}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
