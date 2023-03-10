
const sections = [
  '/introduction',
  '/html-css',
  '/blog',
];

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
    // add trailing slash if enabled above
    forcedNavOrder: sections,
    collapsedNav: sections,
    links: [{ text: 'Osawa Koki', link: 'https://osawa-koki.github.io/osawa-koki/' }],
    frontLine: false,
    ignoreIndex: true,
    title: `<a href='${uri}'>ð¥ºð¥ºð¥º</a><div class='greenCircle'></div><a href='${uri}/introduction/'>introduction</a>`,
  },
  siteMetadata: {
    title: 'octo-campus | @osawa-koki',
    description: 'ITã«é¢ããã¤ã­ã¤ã­ãªæå ±ãçºä¿¡ã',
    ogImage: null,
    docsLocation: 'https://github.com/osawa-koki/octo-campus/tree/main/content',
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
