
const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? '/octo-campus' : ''; // update this to the name of your repo
const uri = isProd ? 'https://osawa-koki.github.io' + basePath : 'http://localhost:8000'; // update this to your github pages url

const project_name = 'octo-campus'; // update this to your project name

const config = {
  gatsby: {
    pathPrefix: basePath,
    siteUrl: uri,
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: `${basePath}/img/Logo.png`,
    logoLink: uri,
    title: `<a href='${uri}'><img class='img-responsive' src='${basePath}/img/SmallLogo.png' alt='octo-campus' /></a>`,
    githubUrl: 'https://github.com/osawa-koki/octo-campus',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
      '/hello',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
      '/hello',
    ],
    links: [{ text: 'Osawa Koki', link: 'https://osawa-koki.github.io/osawa-koki/' }],
    frontLine: false,
    ignoreIndex: true,
    title: `<a href='${uri}'>🥺🥺🥺</a><div class='greenCircle'></div><a href='${uri}/introduction/'>introduction</a>`,
  },
  siteMetadata: {
    title: 'octo-campus | @osawa-koki',
    description: 'ITに関するイロイロな情報を発信。',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: `${basePath}/img/tako.png`,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: project_name,
      short_name: project_name,
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
