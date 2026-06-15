import Markdown from '../components/Markdown.jsx'
import Seo from '../components/Seo.jsx'
import content from '../content/docs.md?raw'

export default function Docs() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Keyword Reference — MyanCode"
        description="Complete reference for all 28 MyanCode keywords, 14 operators, and Myanmar digit support."
        path="/docs"
      />
      <Markdown>{content}</Markdown>
    </div>
  )
}
