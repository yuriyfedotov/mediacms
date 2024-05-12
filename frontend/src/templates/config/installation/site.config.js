module.exports = {
  devEnv: 'true' === process.env.WEBPACK_DEV_SERVER,
  id: process.env.MEDIACMS_ID || 'mediacms-frontend',
  title: process.env.MEDIACMS_TITLE || 'MediaCMS Demo',
  url: process.env.MEDIACMS_URL || 'UNDEFINED_URL',
  api: process.env.MEDIACMS_API || 'UNDEFINED_API',
  theme: {
    mode: 'light', // Valid values: 'light', 'dark'.
    switch: {
      position: 'sidebar', // Valid values: 'header', 'sidebar'.
    },
  },
  logo: {
    lightMode: {
      svg: './static/images/logo_dark.svg',
      img: './static/images/logo_dark.png',
    },
    darkMode: {
      svg: './static/images/logo_light.svg',
      img: './static/images/logo_light.png',
    },
  },
  pages: {
    latest: {
      title: 'Недавно добавленные',
    },
    featured: {
      title: 'Избранное',
    },
    recommended: {
      title: 'Рекомендуемое',
    },
    members: {
      title: 'Участники',
    },
  },
  userPages: {
    liked: {
      title: 'Ваши лайки',
    },
    history: {
      title: 'История',
    },
  },
  taxonomies: {
    tags: {
      title: 'Теги',
    },
    categories: {
      title: 'Категории',
    },
  },
};
