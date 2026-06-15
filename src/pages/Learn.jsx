import { useState } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'
import Markdown from '../components/Markdown.jsx'
import Seo from '../components/Seo.jsx'
import { BookIcon, ChevronDownIcon } from '../components/icons.jsx'

// Per-topic SEO. The /learn index uses `learnIndexSeo`; each lesson maps by slug.
const learnIndexSeo = {
  title: 'Learn MyanCode · မြန်မာကုဒ်',
  description:
    'Step-by-step guide to learning MyanCode — the Burmese programming language. Covers variables, loops, functions, arrays, and objects.',
}

const seoBySlug = {
  installation: {
    title: 'Installation — MyanCode',
    description: 'Install MyanCode via npm in one command. Works on Windows, macOS, and Linux. Requires Node.js v18+.',
  },
  'hello-world': {
    title: 'Hello World — MyanCode',
    description: 'Write your first MyanCode program in Burmese. Print text to the screen with ပြောပါ.',
  },
  running: {
    title: 'Running Your First Program — MyanCode',
    description: 'Run a MyanCode program from the command line and see your Burmese code come to life.',
  },
  variables: {
    title: 'Variables & Assignment — MyanCode',
    description: 'Learn how to store and reuse values in MyanCode using Burmese syntax.',
  },
  'print-input': {
    title: 'Print & Input — MyanCode',
    description: 'Output values with ပြောပါ and read user input with ထည့်သွင်းပါ in MyanCode.',
  },
  comments: {
    title: 'Comments — MyanCode',
    description: 'Add notes to your MyanCode programs using မှတ်ချက်. Comments are ignored at runtime.',
  },
  'if-else': {
    title: 'If / Else-if / Else — MyanCode',
    description: 'Write conditional logic in Burmese using အကယ်၍, သို့မဟုတ်အကယ်၍, and မဟုတ်ရင်.',
  },
  'while-loop': {
    title: 'While Loop — MyanCode',
    description: 'Repeat code while a condition is true using the သောကာလ keyword in MyanCode.',
  },
  'for-loop': {
    title: 'For Loop — MyanCode',
    description: 'Repeat code a fixed number of times using အကြိမ် ပြုလုပ်ပါ in MyanCode.',
  },
  'foreach-loop': {
    title: 'For-Each Loop — MyanCode',
    description: 'Walk through every item in an array using တစ်ခုစီအတွက် in MyanCode.',
  },
  'defining-functions': {
    title: 'Defining Functions — MyanCode',
    description: 'Create reusable blocks of code with လုပ်ဆောင်ချက် in MyanCode.',
  },
  'calling-functions': {
    title: 'Calling Functions — MyanCode',
    description: 'Run a function with ကိုခေါ်ပါ and pass arguments in MyanCode.',
  },
  'return-values': {
    title: 'Return Values — MyanCode',
    description: 'Return a value from a function with ပြန်ပေးပါ in MyanCode.',
  },
  'functions-as-values': {
    title: 'Functions as Values — MyanCode',
    description: 'Store and pass functions as values in MyanCode — the functional programming side.',
  },
  arrays: {
    title: 'Arrays — MyanCode',
    description: 'Create and use lists of values with စာရင်း ဖန်တီးပါ in MyanCode.',
  },
  'array-push': {
    title: 'Array Push — MyanCode',
    description: 'Add items to a list with ထဲသို့ထည့်ပါ in MyanCode.',
  },
  objects: {
    title: 'Objects (OOP) — MyanCode',
    description: 'Bundle data and behaviour into objects with အရာဝတ္ထု ဖန်တီးပါ in MyanCode.',
  },
  'property-access': {
    title: 'Property Access — MyanCode',
    description: 'Read object properties and call methods using the ၏ marker in MyanCode.',
  },
}

// Eagerly import every learn topic as a raw markdown string.
const modules = import.meta.glob('../content/learn/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const content = {}
for (const path in modules) {
  const slug = path.split('/').pop().replace(/\.md$/, '')
  content[slug] = modules[path]
}

const sections = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'installation', label: 'Installation' },
      { slug: 'hello-world', label: 'Hello World' },
      { slug: 'running', label: 'Running your first program' },
    ],
  },
  {
    title: 'Basic Concepts',
    items: [
      { slug: 'variables', label: 'Variables & Assignment' },
      { slug: 'print-input', label: 'Print & Input' },
      { slug: 'comments', label: 'Comments' },
    ],
  },
  {
    title: 'Control Flow',
    items: [
      { slug: 'if-else', label: 'If / Else-if / Else' },
      { slug: 'while-loop', label: 'While Loop' },
      { slug: 'for-loop', label: 'For Loop' },
      { slug: 'foreach-loop', label: 'For-Each Loop' },
    ],
  },
  {
    title: 'Functions',
    items: [
      { slug: 'defining-functions', label: 'Defining Functions' },
      { slug: 'calling-functions', label: 'Calling Functions' },
      { slug: 'return-values', label: 'Return Values' },
      { slug: 'functions-as-values', label: 'Functions as Values' },
    ],
  },
  {
    title: 'Data Structures',
    items: [
      { slug: 'arrays', label: 'Arrays' },
      { slug: 'array-push', label: 'Array Push' },
      { slug: 'objects', label: 'Objects (OOP)' },
      { slug: 'property-access', label: 'Property Access' },
    ],
  },
]

const flat = sections.flatMap((s) => s.items)

function Sidebar({ activeSlug, onNavigate }) {
  return (
    <nav className="space-y-7">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            {section.title}
          </p>
          <ul className="space-y-0.5 border-l border-neutral-200 dark:border-neutral-800">
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/learn/${item.slug}`}
                  onClick={onNavigate}
                  className={() =>
                    `-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      item.slug === activeSlug
                        ? 'border-primary font-medium text-primary dark:text-[#a59cff]'
                        : 'border-transparent text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default function Learn() {
  const { slug } = useParams()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const activeSlug = slug && content[slug] ? slug : flat[0].slug
  const markdown = content[activeSlug] || '# Coming soon\n\nThis section is being written.'

  const idx = flat.findIndex((i) => i.slug === activeSlug)
  const prev = idx > 0 ? flat[idx - 1] : null
  const next = idx < flat.length - 1 ? flat[idx + 1] : null

  // The /learn index (no valid slug) gets the overview meta; lessons get their own.
  const onIndex = !slug || !content[slug]
  const seo = onIndex ? learnIndexSeo : seoBySlug[slug] || learnIndexSeo
  const seoPath = onIndex ? '/learn' : `/learn/${slug}`

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Seo title={seo.title} description={seo.description} path={seoPath} />
      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
        {/* Mobile section toggle */}
        <div className="border-b border-neutral-200 py-3 dark:border-neutral-800 lg:hidden">
          <button
            onClick={() => setMobileNavOpen((v) => !v)}
            className="flex w-full items-center justify-between text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <BookIcon className="h-4 w-4 text-primary dark:text-[#a59cff]" />
              Documentation menu
            </span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileNavOpen && (
            <div className="mt-4 pb-2">
              <Sidebar activeSlug={activeSlug} onNavigate={() => setMobileNavOpen(false)} />
            </div>
          )}
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto py-10 pr-2">
            <Sidebar activeSlug={activeSlug} />
          </div>
        </aside>

        {/* Content */}
        <article className="min-w-0 py-10">
          <Markdown>{markdown}</Markdown>

          {/* Prev / Next */}
          <div className="mt-16 grid gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/learn/${prev.slug}`}
                className="group rounded-xl p-4 transition-all surface hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="text-xs text-neutral-400 transition-transform group-hover:-translate-x-0.5">← Previous</div>
                <div className="mt-1 font-medium text-neutral-800 group-hover:text-primary dark:text-neutral-100 dark:group-hover:text-[#a59cff]">
                  {prev.label}
                </div>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/learn/${next.slug}`}
                className="group rounded-xl p-4 text-right transition-all surface hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="text-xs text-neutral-400 transition-transform group-hover:translate-x-0.5">Next →</div>
                <div className="mt-1 font-medium text-neutral-800 group-hover:text-primary dark:text-neutral-100 dark:group-hover:text-[#a59cff]">
                  {next.label}
                </div>
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
