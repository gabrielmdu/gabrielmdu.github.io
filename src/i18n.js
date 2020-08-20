import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0
    },
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: process.env.NODE_ENV === 'production' ? false : true,
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      wait: true
    }
  });

export default i18n;
