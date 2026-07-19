"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { FadeUp } from "@/components/Animations";
import { IconTrophy, IconAward, IconMedal } from "@tabler/icons-react";

const achievements = [
  { icon: IconTrophy, title: "ТОП-50", subtitle: "Юридичних компаній", detail: "України 2025", value: 50, suffix: "" },
  { icon: IconAward, title: "100+", subtitle: "Виграних справ", detail: "за 3 роки", value: 100, suffix: "+" },
  { icon: IconMedal, title: "98%", subtitle: "Позитивних відгуків", detail: "від клієнтів", value: 98, suffix: "%" },
];

function StatNumber({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: "1.07" }}>
      {suffix === "" ? "ТОП-" : ""}{inView ? <CountUp end={end} duration={2} /> : "0"}{suffix}
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="bg-carbon">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Досягнення</p>
          <h2 className="mb-12 text-frost font-bold" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>Нас визнають</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {achievements.map((a, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="rounded-[28px] bg-obsidian p-8 border border-white/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <a.icon className="h-5 w-5" stroke={1.5} />
                </div>
                <StatNumber end={a.value} suffix={a.suffix} />
                <div className="text-platinum" style={{ fontSize: "14px" }}>{a.subtitle}</div>
                <div className="mt-1 text-blue/60" style={{ fontSize: "12px" }}>{a.detail}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
