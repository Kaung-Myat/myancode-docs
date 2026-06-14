import Markdown from '../components/Markdown.jsx'
import content from '../content/docs.md?raw'

export default function Docs() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Markdown>{content}</Markdown>
    </div>
  )
}
