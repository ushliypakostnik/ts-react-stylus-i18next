import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LANGUAGES, AUTO_LANG } from '../store/constants';
import store from '../store/store';
import { setLanguage } from '../store/modules/utils/actions';
import { rememberLanguage } from './storage';

const detectorOptions = {
  order: ['navigator'],
  lookupLocalStorage: 'language',
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: [ LANGUAGES[0].name, LANGUAGES[1].name ],
    detection: detectorOptions,

    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {
      wait: true,
    },
  })
  .then(() => {
    const { language } = i18n;
    const l = language.substr(0, 2);

    if (!AUTO_LANG) {
      if ([ LANGUAGES[0].name, LANGUAGES[1].name ].includes(l)) {
        store.dispatch(setLanguage(l));
        rememberLanguage(l);
      } else {
        store.dispatch(setLanguage(LANGUAGES[0].name));
        rememberLanguage(LANGUAGES[0].name);
      }
    } else {
      store.dispatch(setLanguage(AUTO_LANG));
      rememberLanguage(AUTO_LANG);
    }
  });

export default i18n;
