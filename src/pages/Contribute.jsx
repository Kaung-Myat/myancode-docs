import Markdown from '../components/Markdown.jsx'
import Seo from '../components/Seo.jsx'
import content from '../content/contribute.md?raw'

export default function Contribute() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Contribute — MyanCode"
        description="Help improve MyanCode. Learn how to add keywords, fix bugs, and contribute to the Burmese programming language."
        path="/contribute"
      />
      <Markdown>{content}</Markdown>
    </div>
  )
}
