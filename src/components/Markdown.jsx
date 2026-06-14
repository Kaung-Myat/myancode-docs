import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock.jsx'

const components = {
  pre({ children }) {
    // Let the CodeBlock (a block element) sit directly in the prose flow
    // instead of being nested inside a <pre>, which would be invalid HTML.
    return <>{children}</>
  },
  code({ className, children }) {
    const text = String(children).replace(/\n$/, '')
    const match = /language-(\w+)/.exec(className || '')
    const isBlock = Boolean(match) || text.includes('\n')

    if (isBlock) {
      return <CodeBlock code={text} language={match ? match[1] : 'myancode'} className="my-6" />
    }
    return <code className={className}>{children}</code>
  },
  a({ href, children }) {
    const external = href && /^https?:\/\//.test(href)
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {children}
      </a>
    )
  },
}

export default function Markdown({ children }) {
  return (
    <div className="prose myan">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
