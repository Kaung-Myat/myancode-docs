import { Link } from 'react-router-dom'
import TypewriterCode from '../components/TypewriterCode.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import PipelineDiagram from '../components/PipelineDiagram.jsx'
import Reveal from '../components/Reveal.jsx'
import { GlobeIcon, LayersIcon, ShieldIcon } from '../components/icons.jsx'

const features = [
  {
    icon: GlobeIcon,
    title: 'Burmese First',
    description: 'Write code in your mother tongue. No English required — every keyword reads like a natural Burmese sentence.',
  },
  {
    icon: LayersIcon,
    title: 'Multi-paradigm',
    description: 'Procedural, functional, and object-oriented styles in one language. Use the approach that fits the problem.',
  },
  {
    icon: ShieldIcon,
    title: 'Fully Offline',
    description: 'No AI, no cloud. A pure NLP engine runs entirely on your machine — fast, private, and dependency-free.',
  },
]

const stats = [
  { value: '28', label: 'keywords' },
  { value: '3', label: 'paradigms' },
  { value: '0', label: 'dependencies' },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* ambient glow blobs */}
        <div className="glow-spot left-[-6rem] top-[-2rem] h-72 w-72 bg-primary/25 dark:bg-primary/30 animate-float-slow" />
        <div className="glow-spot right-[-4rem] bottom-0 h-64 w-64 bg-accent/20 dark:bg-accent/25 animate-float" />

        <Reveal>
          <div className="gradient-ring inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary glass dark:text-[#a59cff]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Burmese natural programming language
          </div>
          <h1 className="myan mt-6 text-4xl font-extrabold leading-[1.25] tracking-tight sm:text-5xl">
            <span className="text-gradient">ကုဒ်ကို မြန်မာဘာသာဖြင့်</span>
            <br />
            <br />
            <span className="text-neutral-900 dark:text-neutral-50">ရေးပါ</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            Burmese natural programming language.
            <span className="font-semibold text-neutral-800 dark:text-neutral-100"> Beginner-friendly. Multi-paradigm. Fully offline.</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/learn"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primary-dark hover:-translate-y-0.5"
            >
              Get Started <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a
              href="https://myan-code.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-neutral-800 transition-all glass hover:-translate-y-0.5 hover:text-primary dark:text-neutral-100 dark:hover:text-[#a59cff]"
            >
              Try in Browser <span aria-hidden>→</span>
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="text-2xl font-extrabold tracking-tight text-gradient">{s.value}</dt>
                <dd className="text-sm text-neutral-500 dark:text-neutral-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[1.75rem] bg-gradient-to-tr from-primary/30 via-transparent to-accent/25 blur-2xl" />
          <TypewriterCode />
        </Reveal>
      </section>

      {/* Features */}
      <section className="py-12">
        <Reveal className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary dark:text-[#a59cff]">Why MyanCode</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Built for the way you think
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <PipelineDiagram />

      {/* Bottom CTA */}
      <section className="my-24">
        <Reveal>
          <div className="gradient-ring relative overflow-hidden rounded-3xl px-8 py-16 text-center glass">
            <div className="glow-spot left-1/2 top-[-4rem] h-56 w-[28rem] -translate-x-1/2 bg-primary/25" />
            <h2 className="myan text-2xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
              ယနေ့ပဲ စတင်ရေးသားကြည့်ပါ
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-300">
              Start writing your first MyanCode program in minutes — right in your browser, no install needed.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/learn"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primary-dark hover:-translate-y-0.5"
              >
                Read the Guide <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-neutral-800 transition-all surface hover:-translate-y-0.5 hover:text-primary dark:text-neutral-100 dark:hover:text-[#a59cff]"
              >
                Download
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
