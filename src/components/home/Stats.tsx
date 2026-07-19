"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { IconPhone } from "@tabler/icons-react";
import { FadeUp } from "@/components/Animations";

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="text-frost font-bold" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.07", letterSpacing: "-0.008em" }}>
      {inView ? <CountUp end={end} duration={2} /> : "0"}{suffix}
    </div>
  );
}

const stats = [
  { value: 12, suffix: "+", label: "років досвіду" },
  { value: 500, suffix: "+", label: "успішних справ" },
  { value: 98, suffix: "%", label: "позитивних відгуків" },
];

export default function Stats() {
  return (
    <section className="bg-black border-t border-white/5">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-platinum" style={{ fontSize: "14px", letterSpacing: "-0.022em" }}>{stat.label}</div>
            </FadeUp>
          ))}
          <FadeUp delay={0.3}>
            <div className="flex items-start gap-2.5">
              <IconPhone className="h-7 w-7 text-blue shrink-0 mt-1" stroke={1.5} />
              <div>
                <div className="text-blue font-bold" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.07" }}>24/7</div>
                <div className="mt-2 text-platinum" style={{ fontSize: "14px" }}>підтримка</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
