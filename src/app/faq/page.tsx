"use client";

import { useState } from "react";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  { q: "Скільки коштує консультація?", a: "Первинна консультація — безкоштовна." },
  { q: "Скільки триває справа?", a: "Консультації — від 30 хвилин. Судові — від місяців до років." },
  { q: "Чи можна онлайн?", a: "Так, через Zoom, Telegram, Viber." },
  { q: "Які документи потрібні?", a: "Візьміть усі документи, пов'язані зі справою." },
  { q: "Чи гарантуєте результат?", a: "Гарантуємо професійний підхід." },
  { q: "Працюєте з іншими містами?", a: "Так, з клієнтами з усієї України." },
  { q: "Як оплата?", a: "Готівкою, переказом. Можлива оплата частинами." },
  { q: "Можна змінити адвоката?", a: "Так, на будь-якому етапі." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>FAQ</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Часті питання</h1>
        </div>
      </section>
      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[28px] bg-obsidian overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left text-frost hover:bg-graphite transition-colors" style={{ fontSize: "17px" }}>
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <IconChevronDown className={`h-4 w-4 shrink-0 text-platinum transition-transform ${open === i ? "rotate-180" : ""}`} stroke={2} />
                </button>
                {open === i && <div className="px-5 pb-5 text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Не знайшли відповідь?</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Зверніться до нас</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
