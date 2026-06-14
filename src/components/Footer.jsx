import { Link } from 'react-router-dom'
import { HexagonIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200/70 glass dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-glow"><HexagonIcon className="h-3.5 w-3.5" strokeWidth="2" /></span>
              <span className="font-bold">MyanCode</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              ကုဒ်ကို မြန်မာဘာသာဖြင့် ရေးပါ
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/learn" className="hover:text-primary">Getting Started</Link></li>
              <li><Link to="/docs" className="hover:text-primary">Reference</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></li>
              <li><Link to="/contribute" className="hover:text-primary">Contribute</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://myan-code.vercel.app" target="_blank" rel="noreferrer" className="hover:text-primary">Web IDE</a></li>
              <li><Link to="/download" className="hover:text-primary">Install</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} MyanCode Project · Open Source (MIT)</p>
          <p className="myan">မြန်မာဘာသာ programming language</p>
        </div>
      </div>
    </footer>
  )
}
