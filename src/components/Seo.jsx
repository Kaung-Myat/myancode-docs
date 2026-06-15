import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://myancode-docs.vercel.app'

// Per-page SEO. Sets the document title and the page-specific meta description,
// plus syncs the canonical URL, og:title/description and twitter:title/description
// so each route is shareable on its own.
export default function Seo({ title, description, path = '' }) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
