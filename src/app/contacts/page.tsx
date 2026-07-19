"use client";

import { useState } from "react";
import { IconPhone, IconMail, IconMapPin, IconClock, IconCircleCheck, IconBrandTelegram } from "@tabler/icons-react";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Контакти</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Контакти</h1>
        </div>
      </section>

      {/* Full-width map */}
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 pb-8">
          <div className="rounded-[28px] overflow-hidden" style={{ height: "400px" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.525!2d30.523!3d50.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2f7b0b7%3A0x1234567890abcdef!2z0LLRg9C70LjRhtGPINCl0YDQtdGA0LDRgtC40LosIDIyLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Карта" />
          </div>
        </div>
      </section>

      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-[28px] bg-obsidian p-7">
                <h2 className="mb-5 text-frost font-semibold" style={{ fontSize: "19px" }}>Контактна інформація</h2>
                <div className="space-y-4">
                  {[
                    { icon: IconPhone, label: "Телефон", value: "+38 (044) 123-45-67", href: "tel:+380441234567" },
                    { icon: IconMail, label: "Email", value: "info@legal.ua", href: "mailto:info@legal.ua" },
                    { icon: IconMapPin, label: "Адреса", value: "м. Київ, вул. Хрещатик, 22, офіс 310" },
                    { icon: IconClock, label: "Графік", value: "Пн-Пт: 9:00 — 18:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-graphite text-blue"><item.icon className="h-4 w-4" stroke={1.5} /></div>
                      <div>
                        <p className="mb-0.5 text-frost font-semibold" style={{ fontSize: "12px" }}>{item.label}</p>
                        {item.href ? <a href={item.href} className="text-halo hover:text-frost transition-colors" style={{ fontSize: "14px" }}>{item.value}</a> : <p className="text-platinum" style={{ fontSize: "14px" }}>{item.value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] bg-obsidian p-6">
                <h3 className="mb-3 text-frost font-semibold" style={{ fontSize: "14px" }}>Месенджери</h3>
                <div className="flex gap-2">
                  {["Telegram", "Viber", "WhatsApp"].map((m) => (
                    <a key={m} href="#" className="flex items-center gap-2 rounded-full bg-graphite border border-white/5 px-4 py-2 text-frost hover:border-blue/30 transition-all" style={{ fontSize: "13px" }}>
                      <IconBrandTelegram className="h-3.5 w-3.5 text-blue" stroke={1.5} />
                      {m}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[28px] bg-obsidian p-7">
              <h2 className="mb-5 text-frost font-semibold" style={{ fontSize: "19px" }}>Записатися на консультацію</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <IconCircleCheck className="mx-auto mb-4 h-12 w-12 text-green" stroke={1.5} />
                  <h3 className="mb-2 text-frost font-semibold" style={{ fontSize: "19px" }}>Дякуємо!</h3>
                  <p className="text-platinum" style={{ fontSize: "14px" }}>Ми зв&apos;яжемося з вами найближчим часом.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[{ label: "Ім'я *", type: "text", name: "name", placeholder: "Ваше ім'я", required: true }, { label: "Телефон *", type: "tel", name: "phone", placeholder: "+38 (0__) ___-__-__", required: true }, { label: "Email", type: "email", name: "email", placeholder: "your@email.com" }].map((f) => (
                    <div key={f.name}>
                      <label className="mb-1.5 block text-platinum font-medium" style={{ fontSize: "12px" }}>{f.label}</label>
                      <input type={f.type} required={f.required} value={form[f.name as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} className="w-full rounded-full bg-graphite border border-white/10 px-4 py-2.5 text-frost focus:border-blue focus:outline-none transition-colors placeholder:text-smoke" style={{ fontSize: "14px" }} placeholder={f.placeholder} />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-platinum font-medium" style={{ fontSize: "12px" }}>Повідомлення</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-[28px] bg-graphite border border-white/10 px-4 py-3 text-frost focus:border-blue focus:outline-none transition-colors resize-none placeholder:text-smoke" style={{ fontSize: "14px" }} placeholder="Опишіть вашу ситуацію..." />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-blue px-5 py-3 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Надіслати</button>
                </form>
              )}
            </div>
          </div>
          <div className="mt-8 rounded-[28px] bg-obsidian p-8 text-center">
            <div className="flex justify-center gap-1 text-orange mb-2" style={{ fontSize: "24px" }}>★★★★★</div>
            <div className="text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>98%</div>
            <p className="text-platinum" style={{ fontSize: "14px" }}>клієнтів рекомендують нас</p>
          </div>
        </div>
      </section>
    </>
  );
}
