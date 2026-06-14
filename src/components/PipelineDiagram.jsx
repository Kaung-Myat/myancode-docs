import Reveal from './Reveal.jsx'
import { ScissorsIcon, TagIcon, FilterIcon, TreeIcon, RepeatIcon, ZapIcon } from './icons.jsx'

const STAGES = [
  { Icon: ScissorsIcon, title: 'Tokenizer', desc: 'Splits Burmese text into tokens using syllable boundaries.' },
  { Icon: TagIcon, title: 'Classifier', desc: 'Identifies which keyword or construct each token belongs to.' },
  { Icon: FilterIcon, title: 'Extractor', desc: 'Pulls out variables, values, and expressions from each statement.' },
  { Icon: TreeIcon, title: 'AST', desc: 'Builds an abstract syntax tree from classified statements.' },
  { Icon: RepeatIcon, title: 'Transpiler', desc: 'Walks the AST and emits equivalent JavaScript.' },
  { Icon: ZapIcon, title: 'Runtime', desc: 'Executes the JavaScript and streams output back to the IDE.' },
]

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center px-1 text-primary/40 dark:text-primary/50">
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path d="M0 7H20M20 7L14 1M20 7L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function PipelineDiagram() {
  return (
    <section className="mt-24">
      <Reveal className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary dark:text-[#a59cff]">How it works</p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          A 6-stage NLP pipeline
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Every MyanCode program flows through six deterministic stages — from raw Burmese text to running JavaScript. No models, no cloud calls.
        </p>
      </Reveal>

      <div className="flex flex-col items-stretch gap-3 overflow-x-auto pb-2 md:flex-row md:gap-1">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.title} delay={i * 80} className="flex flex-1 flex-col items-stretch md:flex-row">
            <div className="group relative flex-1 overflow-hidden rounded-2xl px-4 py-5 text-center transition-all duration-300 surface hover:-translate-y-1 hover:shadow-card-hover">
              <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-xl text-primary ring-1 ring-inset ring-primary/10 dark:text-[#a59cff]">
                <stage.Icon className="h-5 w-5" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary dark:text-[#a59cff]">
                Stage {i + 1}
              </div>
              <div className="mb-1.5 font-bold text-neutral-900 dark:text-neutral-50">{stage.title}</div>
              <div className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{stage.desc}</div>
            </div>
            {i < STAGES.length - 1 && <Arrow />}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
