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
          content="ADLink"
        />
        <meta
          name="description"
          content="The best place to create your BioLink."
        />
        <meta property="og:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta
          name="og:description"
          content="The best place to create your BioLink."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta name="twitter:site:domain" content="adlink.aghea.site" />
        <meta name="twitter:url" content="https://adlink.aghea.site" />
        <meta
          name="og:title"
          content="ADLink"
        />
        <meta name="og:image" content="https://raw.githubusercontent.com/agcrisbp/ADLink/main/public/preview.png" />
        <meta name="apple-mobile-web-app-title" content="ADLink" />
        <link rel="icon" href="/sign.png" type="image/png" />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  i18n: [
  { locale: 'en', text: 'English' },
  { locale: 'id', text: 'Bahasa' }
  ],
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Creator"
            href="https://aghea.site"
          >
            <center><img src="/logo.png" width="100" height="100" /></center>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} <a href="https://agcrisbp.my.id" target="_blank">Agcrismanto Budhi Praswastyka</a>. All Rights Reserved.
        </p>
      </div>
    )
  }
}

export default config