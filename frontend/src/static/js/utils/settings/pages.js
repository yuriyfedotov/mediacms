let PAGES = null;

export function init(settings) {
  PAGES = {
    latest: {
      enabled: false,
      title: 'Недавние',
    },
    featured: {
      enabled: false,
      title: 'Избранное',
    },
    recommended: {
      enabled: false,
      title: 'Рекомндованное',
    },
    members: {
      enabled: false,
      title: 'Участники',
    },
    liked: {
      enabled: false,
      title: 'Ваши лайки',
    },
    history: {
      enabled: false,
      title: 'История',
    },
  };

  if (void 0 !== settings) {
    for (let k in PAGES) {
      if (void 0 !== settings[k]) {
        PAGES[k].enabled = true;

        if (void 0 !== settings[k].enabled && false === settings[k].enabled) {
          PAGES[k].enabled = false;
        }

        if ('string' === typeof settings[k].title) {
          PAGES[k].title = settings[k].title.trim();
        }
      }
    }
  }
}

export function settings() {
  return PAGES;
}
