import {
  ObjectOfAnyType,
  ObjectOfStringsType,
  LanguageObjectType,
  StoreType,
} from './types';

// const isProd : boolean = process.env.NODE_ENV === 'production';
// const apiUrl : string | null = process.env.REACT_APP_API_URL;
// export const API_URL : string = isProd ? apiUrl || 'https://...' : apiUrl || 'http://localhost:3000';

export const API_URL : string | null = process.env.REACT_APP_API_URL;

export const LANGUAGES : LanguageObjectType[] = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

export const LOCALSTORAGE : ObjectOfStringsType = {
  LANG: 'language',
  STORAGE_MESSAGE: 'storage-message',
};

export const SESSIONSTORAGE : ObjectOfStringsType = {
};

// Auto language
export const AUTO_LANG : string | null = localStorage.getItem(LOCALSTORAGE.LANG);

// Is storage message accept
export const STORAGE_MESSAGE_ACCEPT : boolean = localStorage.getItem(LOCALSTORAGE.STORAGE_MESSAGE) ? true : false;

export const DESIGN : ObjectOfAnyType = {
  TIMEOUT: 200,
  SPINNER_SIZE: 100,
  DEVICES_TYPES: ['desktop', 'tablet', 'mobile',],
  VIEWS: [
    { id: 1, name: 'main', path: '/main', },
    { id: 2, name: 'page404', path: '/any_others', },
  ],
};

export const INITIAL_STATE : StoreType = {
  rootReducer: {
    utils: {
      language: AUTO_LANG,
      isAcceptStorageMessage: STORAGE_MESSAGE_ACCEPT,
      deviceType: null,
    },
    test: {
      test: "AAAAAAAAAAA",
    },
  },
};
