import Link from "next/link";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";

const practiceData: Record<string, { title: string; tagline: string; description: string; questions: string[]; stages: string[]; faq: { q: string; a: string }[]; team: { name: string; role: string; photo: string; slug: string }[]; cases: { title: string; result: string }[] }> = {
  family: {
    title: "Сімейне право", tagline: "Повний супровід від консультації до рішення суду",
    description: "Допомагаємо вирішувати найскладніші сімейні питання.",
    questions: ["Розлучення та поділ майна", "Стягнення аліментів", "Визначення місця проживання дитини", "Порядок спілкування з дитиною", "Усиновлення", "Шлюбний договір"],
    stages: ["Консультація", "Аналіз", "Документи", "Суд", "Результат"],
    faq: [
      { q: "Скільки триває розлучення?", a: "Через ЗАГС — 1-2 місяці. Через суд — від 2 до 6 місяців." },
      { q: "Які документи потрібні?", a: "Свідоцтво про шлюб, паспорти, документи на майно." },
      { q: "Як розподіляється майно?", a: "Спільне майно ділиться порівну, якщо інше не передбачено договором." },
    ],
    team: [{ name: "Марія Коваленко", role: "Старший адвокат", photo: "https://i.pravatar.cc/200?img=45", slug: "kovalenko" }, { name: "Анна Мельник", role: "Юрист", photo: "https://i.pravatar.cc/200?img=47", slug: "melnyk" }],
    cases: [{ title: "Поділ майна після розлучення", result: "Стягнуто 1.8 млн грн" }, { title: "Визначення місця проживання дитини", result: "На користь клієнта" }],
  },
  civil: { title: "Цивільне право", tagline: "Захист ваших прав у цивільних спорах", description: "Захищаємо права у спорах щодо договорів, відшкодування збитків та спадщини.", questions: ["Спори щодо договорів", "Відшкодування збитків", "Захист прав споживачів", "Спадкові справи", "Визнання правочину недійсним", "Захист честі та гідності"], stages: ["Консультація", "Оцінка", "Позов", "Суд", "Виконання"], faq: [{ q: "Скільки триває цивільна справа?", a: "Від 2 до 12 місяців." }, { q: "Які строки позовної давності?", a: "Загальний строк — 3 роки." }], team: [{ name: "Олександр Петренко", role: "Керуючий партнер", photo: "https://i.pravatar.cc/200?img=68", slug: "petrenko" }], cases: [{ title: "Відшкодування збитків", result: "Стягнуто 2.1 млн грн" }] },
  criminal: { title: "Кримінальне право", tagline: "Професійний захист на кожному етапі", description: "Захищаємо ваші права в кримінальних справах.", questions: ["Захист підозрюваного", "Оскарження вироків", "Умовно-дострокове звільнення", "Закриття провадження", "Захист потерпілих", "Приватне обвинувачення"], stages: ["Термінова консультація", "Матеріали", "Досудовий захист", "Суд", "Оскарження"], faq: [{ q: "Коли потрібен адвокат?", a: "Негайно з моменту затримання або виклику." }], team: [{ name: "Дмитро Шевченко", role: "Адвокат", photo: "https://i.pravatar.cc/200?img=53", slug: "shevchenko" }], cases: [{ title: "Захист за шахрайство", result: "Провадження закрито" }] },
  corporate: { title: "Корпоративне право", tagline: "Юридичний супровід бізнесу", description: "Допомагаємо компаніям вирішувати корпоративні питання.", questions: ["Створення компаній", "Корпоративні спори", "M&A", "Корпоративне управління", "Due diligence", "Вихід учасника"], stages: ["Аналіз", "Стратегія", "Документи", "Реалізація", "Супровід"], faq: [{ q: "Скільки коштує створення компанії?", a: "Від 15 000 грн під ключ." }], team: [{ name: "Олександр Петренко", role: "Керуючий партнер", photo: "https://i.pravatar.cc/200?img=68", slug: "petrenko" }], cases: [{ title: "Корпоративний спір", result: "Мирова угода на користь клієнта" }] },
  "real-estate": { title: "Нерухомість", tagline: "Захист ваших прав на нерухомість", description: "Допомагаємо вирішувати спори з забудовниками.", questions: ["Спори з забудовниками", "Оформлення прав", "Купівля-продаж", "Оренда", "Визнання права власності", "Реконструкція"], stages: ["Експертиза", "Документи", "Договір", "Реєстрація", "Супровід"], faq: [{ q: "Як захиститися від забудовника?", a: "Юридична експертиза, фіксація порушень, позов." }], team: [{ name: "Ігор Бондаренко", role: "Адвокат", photo: "https://i.pravatar.cc/200?img=59", slug: "bondarenko" }], cases: [{ title: "Спор із забудовником", result: "Стягнуто 2.4 млн грн" }] },
  tax: { title: "Податкове право", tagline: "Захист від податкових ризиків", description: "Допомагаємо вирішувати питання оподаткування.", questions: ["Податкові перевірки", "Оскарження рішень", "Консультації", "Податкове планування", "Податкові спори", "Повернення податків"], stages: ["Аналіз", "Документи", "Скарга", "Перевірка", "Суд"], faq: [{ q: "Як оскаржити податкове рішення?", a: "Спочатку в адміністративному порядку, потім в суді." }], team: [{ name: "Анна Мельник", role: "Юрист", photo: "https://i.pravatar.cc/200?img=47", slug: "melnyk" }], cases: [{ title: "Оскарження донарахування", result: "82% штрафу зменшено" }] },
};

export function generateStaticParams() { return Object.keys(practiceData).map((slug) => ({ slug })); }

export default async function PracticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = practiceData[slug] || practiceData.family;

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 lg:py-36">
          <nav className="mb-6 text-smoke" style={{ fontSize: "10px" }}>
            <Link href="/" className="hover:text-platinum transition-colors">Головна</Link><span className="mx-2">/</span>
            <Link href="/practices" className="hover:text-platinum transition-colors">Практики</Link><span className="mx-2">/</span>
            <span className="text-platinum">{p.title}</span>
          </nav>
          <h1 className="mb-3 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>{p.title}</h1>
          <p className="mb-6 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>{p.tagline}</p>
          <p className="mb-8 text-platinum max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>{p.description}</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Отримати консультацію</Link>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 pb-20 md:pb-28">
          <h2 className="mb-6 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Які питання вирішуємо</h2>
          <div className="rounded-[28px] bg-obsidian p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {p.questions.map((q, i) => (
                <div key={i} className="flex items-center gap-3">
                  <IconCheck className="h-4 w-4 text-blue shrink-0" stroke={3} />
                  <span className="text-platinum" style={{ fontSize: "14px" }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-carbon border-y border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-10 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Етапи роботи</h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
              {p.stages.map((stage, i) => (
                <div key={i} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-paper font-bold" style={{ fontSize: "14px" }}>{String(i + 1).padStart(2, "0")}</div>
                  {i < p.stages.length - 1 && <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] text-center"><span className="text-smoke" style={{ fontSize: "14px" }}>→</span></div>}
                  <p className="text-frost font-semibold md:mt-3" style={{ fontSize: "14px" }}>{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>З цією категорією працюють</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {p.team.map((member) => (
              <Link key={member.slug} href={`/team/${member.slug}`} className="group flex items-center gap-4 rounded-[28px] bg-obsidian p-5 hover:bg-graphite transition-all">
                <div className="relative h-16 w-16 rounded-[28px] overflow-hidden shrink-0">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h3 className="text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "17px" }}>{member.name}</h3>
                  <p className="text-platinum" style={{ fontSize: "12px" }}>{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon border-y border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Пов&apos;язані кейси</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {p.cases.map((c, i) => (
              <div key={i} className="rounded-[28px] bg-obsidian p-7">
                <h3 className="mb-3 text-frost font-semibold" style={{ fontSize: "17px" }}>{c.title}</h3>
                <div className="h-px bg-white/5 mb-3" />
                <div className="text-green font-bold" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 py-20 md:py-28">
          <h2 className="mb-8 text-frost font-bold text-center" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "1.07" }}>Часті питання</h2>
          <div className="space-y-2.5">
            {p.faq.map((faq, i) => (
              <details key={i} className="group rounded-[28px] bg-obsidian overflow-hidden">
                <summary className="flex w-full items-center justify-between p-5 text-left text-frost cursor-pointer hover:bg-graphite transition-colors" style={{ fontSize: "17px" }}>
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="text-platinum group-open:rotate-180 transition-transform" style={{ fontSize: "16px" }}>↓</span>
                </summary>
                <div className="px-5 pb-5 text-platinum" style={{ fontSize: "14px", lineHeight: "1.43" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Потрібна допомога саме у цій справі?</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Запишіться на безкоштовну консультацію</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
