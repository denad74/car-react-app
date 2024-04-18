import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import bsTranslation from './locales/bs.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    bs: {
      translation: bsTranslation,
    },
  },
  lng: 'bs',
  fallbackLng: 'bs',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
