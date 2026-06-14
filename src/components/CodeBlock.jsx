import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import MyanCodeHighlighter from './MyanCodeHighlighter.jsx'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('json', json)

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <button
      onClick={onClick}
      aria-label="Copy code"
      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-accent">Copied</span>
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

function languageLabel(lang) {
  if (!lang) return ''
  const l = lang.toLowerCase()
  if (l === 'myancode' || l === 'myan' || l === 'mc') return 'MyanCode'
  if (l === 'bash' || l === 'sh' || l === 'shell') return 'bash'
  if (l === 'js' || l === 'javascript') return 'js'
  if (l === 'json') return 'json'
  return lang
}

export default function CodeBlock({ code, language = 'myancode', showHeader = true, className = '' }) {
  const lang = (language || '').toLowerCase()
  const isMyan = lang === 'myancode' || lang === 'myan' || lang === 'mc' || lang === ''

  return (
    <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#16161b] shadow-card ring-1 ring-black/5 ${className}`}>
      {showHeader && (
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-2 font-mono text-xs text-neutral-400">
              {languageLabel(language)}
            </span>
          </div>
          <CopyButton text={code} />
        </div>
      )}
      {isMyan ? (
        <MyanCodeHighlighter code={code} />
      ) : (
        <SyntaxHighlighter
          language={lang || 'bash'}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.5rem',
            background: 'transparent',
            fontSize: '14px',
            lineHeight: '1.7',
          }}
          codeTagProps={{
            style: {
              fontFamily: '"Padauk", "Consolas", monospace',
              display: 'inline-block',
              paddingRight: '1.5rem',
            },
          }}
        >
          {code.replace(/\n$/, '')}
        </SyntaxHighlighter>
      )}
    </div>
  )
}
