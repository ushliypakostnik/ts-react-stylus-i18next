import i18n from './i18n';

export const rememberLanguage = (language : string) : void => {
  if (typeof(language) !== 'undefined') {
    i18n.changeLanguage(language);
  }
};

export default Storage;
