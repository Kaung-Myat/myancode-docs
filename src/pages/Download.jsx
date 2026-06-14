import CodeBlock from '../components/CodeBlock.jsx'
import { CheckCircleIcon, GlobeIcon } from '../components/icons.jsx'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-[#2e8b76] dark:text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  )
}

function Card({ tag, title, subtitle, children, badge, featured }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 ${
        featured
          ? 'gradient-ring glass shadow-glow'
          : 'surface hover:shadow-card-hover'
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-[#a59cff]">{tag}</span>
        {featured && (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Recommended
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>
      <div className="mt-5 flex-1">{children}</div>
      <div className="mt-5">
        <Badge>{badge}</Badge>
      </div>
    </div>
  )
}

export default function Download() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-neutral-900 dark:text-neutral-50">Download </span>
          <span className="text-gradient">MyanCode</span>
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Pick the option that fits you best — install the CLI, run it instantly in your browser, or build from source.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Card
          tag="npm"
          title="Install the CLI"
          subtitle="Recommended for developers"
          badge="Works on Windows, macOS, Linux"
          featured
        >
          <CodeBlock code="npm install -g myancode" language="bash" />
          <p className="mt-3 mb-2 text-sm text-neutral-600 dark:text-neutral-400">Then run any program:</p>
          <CodeBlock code="myancode program.myan" language="bash" />
        </Card>

        <Card
          tag="Web IDE"
          title="Run in your browser"
          subtitle="No installation required"
          badge="No installation required"
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Open the full MyanCode editor with examples, live output, and syntax highlighting — straight from your browser.
          </p>
          <a
            href="https://myan-code.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#0a3d33] shadow-glow-accent transition-all hover:-translate-y-0.5 hover:bg-[#3fb39d]"
          >
            Open MyanCode IDE <span aria-hidden>→</span>
          </a>
        </Card>

        <Card
          tag="Source"
          title="Build from source"
          subtitle="For contributors"
          badge="Requires Node.js v18+"
        >
          <CodeBlock code="git clone https://github.com/YOUR_USERNAME/myancode" language="bash" />
          <p className="mt-3 mb-2 text-sm text-neutral-600 dark:text-neutral-400">Install and start:</p>
          <CodeBlock code={'npm install\nnpm start'} language="bash" />
        </Card>
      </div>

      {/* Requirements */}
      <div className="mt-16 rounded-2xl p-8 surface">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">Requirements</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-neutral-100">Node.js v18 or newer</div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Required for the npm package and building from source. Not needed for the Web IDE.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GlobeIcon className="mt-0.5 h-6 w-6 shrink-0 text-primary dark:text-[#a59cff]" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-neutral-100">Any modern browser</div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Chrome, Firefox, Edge, or Safari — all you need to run MyanCode in the browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
