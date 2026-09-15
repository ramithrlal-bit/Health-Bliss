import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import calmImg from "@/assets/calm.jpg";

const PHONE = "+91 82697 99448";
const TEL = "tel:+918269799448";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Health Bliss — Psychologist & Meditation Counselling on Call" },
      {
        name: "description",
        content:
          "Talk instantly to a psychologist, counsellor, meditation guide, Ayurvedic guider or caring listener. Online and on-site, 9am–11pm daily, Hindi & English.",
      },
      {
        property: "og:title",
        content: "Health Bliss — Psychologist & Meditation Counselling on Call",
      },
      {
        property: "og:description",
        content:
          "Instant call support for anxiety, depression, relationships, loneliness and inner peace. Male & female counsellors available.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const professionals = [
  "Psychologist",
  "Counselor",
  "Ayurvedic guider",
  "Meditation guider",
  "Yoga expert",
  "Fitness trainer",
  "Life coach",
  "Spiritual guider",
  "Dietitian",
  "Caring listener",
];

const services = [
  {
    title: "Psychologist",
    body: "For every mental state — difficult or good. You can also call simply because you want more happiness in your life.",
    list: [
      "Anxiety disorders",
      "Bipolar disorder",
      "Depression",
      "Dissociative disorders",
      "ADHD",
      "Post-traumatic stress disorder",
      "Schizophrenia",
      "Obsessive-compulsive disorder",
      "Personality disorders",
      "Impulse control & conduct disorders",
      "Substance use & addictive disorders",
      "Trauma- and stressor-related disorders",
    ],
  },
  {
    title: "Relationship issues",
    body: "Relationships grow complex when we lose sight of how society, relationship and nature interconnect. We work through it with logic, universally applicable facts, the science of relationship and simplicity.",
  },
  {
    title: "Cleaning subconscious negativity",
    body: "The negativity that quietly works on you without your knowing. A clear, logical solution is available for it.",
  },
  {
    title: "Ayurvedic treatment",
    body: "All diseases approached through Ayurveda and naturopathy.",
    list: [
      "Asthma",
      "Arthritis",
      "Digestive problems",
      "Eczema",
      "High blood pressure",
      "Sugar",
      "Migraine",
    ],
  },
  {
    title: "Counseling — no appointment needed",
    body: "A rare offering: whenever you feel like it, call a counsellor, psychologist, doctor or health professional directly, with no prior appointment.",
  },
  {
    title: "Fitness, weight loss, food & cooking",
    body: "Everything around fitness, weight loss, nutrition, diet plans, healthy eating, food and cooking.",
  },
  {
    title: "Feeling lonely",
    body: "Momentarily lonely, temporarily lonely, or living alone for good — you can call in any sense of the word.",
  },
  {
    title: "Just talk",
    body: "Most people simply need a good, positive person to talk to — freely, openly, without judgement. You just want a loving and caring listener.",
  },
  {
    title: "Scientific spirituality",
    body: "Understood scientifically, spirituality becomes a power station of positivity. Logical help is available through that process.",
  },
  {
    title: "Synchronize with nature",
    body: "The most fundamental fact: the more natural you are, the happier you will be. Effortless synchronisation with nature, explained with logic and science.",
  },
];

const peaceScale = [
  { range: "10 – 8", result: "Your body becomes perfect" },
  { range: "7 – 5", result: "Your mind becomes fit" },
  { range: "4 – 2", result: "Your emotions rest in bliss" },
  { range: "1", result: "Enlightenment, bliss, synchrony with nature" },
];

function CallButton({ label = "Call now" }: { label?: string }) {
  return (
    <a
      href={TEL}
      className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
    >
      {label} · {PHONE}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg tracking-tight text-foreground">
            Health <span className="text-primary">Bliss</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#meditation" className="transition-colors hover:text-primary">
              Meditation
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <a
            href={TEL}
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Call now
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Mist rising over a still lake at sunrise"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/72" />
          <div className="relative mx-auto max-w-4xl px-5 py-28 text-center md:py-40">
            <p className="animate-rise text-xs uppercase tracking-[0.35em] text-primary">
              The Complete Wisdom
            </p>
            <h1 className="animate-rise mt-6 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Health Bliss
            </h1>
            <p className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Meditation expert, doctor, psychologist and counsellor — instantly available on
              call, for every kind of health solution.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CallButton />
              <a
                href="#services"
                className="rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Explore services
              </a>
            </div>
            <p className="mt-6 text-xs tracking-wide text-muted-foreground">
              Male &amp; female counsellors · Hindi &amp; English · Online &amp; on-site visits
            </p>
          </div>
        </section>

        {/* Quick facts */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
            {[
              ["Open daily", "9 am – 11 pm (emergencies anytime)"],
              ["No appointment needed", "Instant call, or traditional booking"],
              ["Payments", "UPI and PayPal accepted"],
            ].map(([k, v]) => (
              <div key={k} className="text-center sm:text-left">
                <p className="font-display text-lg text-foreground">{k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">About us</p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl">
                One call away from someone who truly listens.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Doctor, meditation expert, psychologist, personal coach, spoon-feeding
                counsellor and more — instantly available on call for your every health
                solution. Both options are open to you: instant call treatment, or traditional
                appointment-based treatment.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {professionals.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-secondary-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <blockquote className="mt-10 rounded-2xl border-l-4 border-accent bg-card p-6 shadow-[var(--shadow-soft)]">
                <p className="leading-relaxed text-foreground">
                  90% जो बातें बचपन में बताई गई हैं वह अवैज्ञानिक, इललॉजिकल, अप्राकृतिक हैं, जो
                  बहुत ज्यादा अंदर अवचेतन में जाकर लगभग सारी बीमारियां, समस्याएं पैदा करती हैं।
                </p>
                <p className="mt-3 font-display text-lg text-primary">उपाय — ध्यान. कॉल</p>
              </blockquote>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[image:var(--gradient-calm)] animate-breathe" />
              <img
                src={calmImg}
                alt="Balanced stones resting in still water"
                width={1200}
                height={900}
                loading="lazy"
                className="rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-border bg-secondary/40 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Services</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-snug text-foreground md:text-4xl">
              Care for the mind, the body and everything quietly in between.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  {s.list && (
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {s.list.map((i) => (
                        <li
                          key={i}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Meditation */}
        <section id="meditation" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Meditation</p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl">
                Meditation brings peace.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Imagine peace as a scale from 10 to 1. As you move down the scale, something
                different in you settles. The simplest and most effective ways of meditation
                and peace are available here.
              </p>
              <div className="mt-8">
                <CallButton label="Start with a call" />
              </div>
            </div>
            <ol className="space-y-4">
              {peaceScale.map((p, i) => (
                <li
                  key={p.range}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5"
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <span className="font-display text-2xl text-primary">{p.range}</span>
                  <span className="text-sm text-muted-foreground">{p.result}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="font-display text-2xl text-foreground">Bliss beyond your thinking</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Listen to your favourite topic in the discourses section and let peace arrive
              naturally.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://oshoworld.com/discourses/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                Discourses
              </a>
              <a
                href="https://www.youtube.com/@Helping.Psychologist.Doctor/videos"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                YouTube — Dr Khanna, Beyond Psychology
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Whenever it feels heavy, call.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Working hours", "All days, 9 am to 11 pm. In an emergency you can call anytime."],
                ["How we meet", "Online sessions and on-site client visits are both available."],
                ["Languages", "Conversations in Hindi and English."],
                ["Payments & donation", "PayPal and UPI both accepted."],
                ["Counsellors", "Male and female counsellors available."],
                ["Booking", "Call instantly, or take a traditional appointment."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg text-foreground">{k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-[2rem] bg-primary p-10 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
                Call / UPI
              </p>
              <a
                href={TEL}
                className="mt-4 block font-display text-3xl text-primary-foreground md:text-5xl"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-center text-xs text-muted-foreground">
        <p>Health Bliss — The Complete Wisdom.</p>
        <p className="mt-2">
          Information here is guidance and support, not a substitute for emergency medical care.
        </p>
      </footer>
    </div>
  );
}
