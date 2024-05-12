import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
    <img src="/sign.png" width="70" height="70" />
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/agcrisbp/ADLink'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="title"
          content="ADLink Documentation"
        />
        <meta
          name="description"
          content="The best place to create your landing page for your links on the world wide web."
        />
        <meta property="og:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta
          name="og:description"
          content="The best place to create your landing page for your links on the world wide web."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta name="twitter:site:domain" content="adlink.aghea.site" />
        <meta name="twitter:url" content="https://adlink.aghea.site" />
        <meta
          name="og:title"
          content="ADLink Documentation"
        />
        <meta name="og:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta name="apple-mobile-web-app-title" content="ADLink Documentation" />
        <link rel="icon" href="/sign.png" type="image/png" />
        <script defer src="/_vercel/insights/script.js"></script>
      </>
    )
  },
  chat: {
    link: 'https://twitter.com/messages/compose?recipient_id=434987538',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  },
  
  banner: {
    key: 'Download',
    text: (
      <a href="https://bit.ly/ADLink-Download" target="_blank" rel="noreferrer">
        🎉 Download Template →
      </a>
    )
  },
  i18n: [
  { locale: 'en', text: 'English' },
  { locale: 'id', text: 'Bahasa' }
  ],
  docsRepositoryBase: 'https://github.com/agcrisbp/ADLink-Docs',
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Creator"
            href="https://aghea.biz.id/"
          >
            <center><img src="/logo.png" width="100" height="100" /></center>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} <a href="https://aghea.biz.id/" target="_blank">Agcrismanto Budhi Praswastyka</a>. All Rights Reserved.
        </p>
      </div>
    )
  }
}

export default config