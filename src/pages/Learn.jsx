import { useState } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'
import Markdown from '../components/Markdown.jsx'
import { BookIcon, ChevronDownIcon } from '../components/icons.jsx'

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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
