import Markdown from '../components/Markdown.jsx'
import Seo from '../components/Seo.jsx'
import content from '../content/about.md?raw'

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="About MyanCode · မြန်မာကုဒ်"
        description="MyanCode is a Burmese natural language programming language built for Myanmar university students. Learn about the NLP pipeline and design philosophy."
        path="/about"
      />
      <Markdown>{content}</Markdown>
    </div>
  )
}
