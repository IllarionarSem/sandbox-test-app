import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en.json';
import ru from './i18n/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

function getInitialLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith('ru') ? 'ru' : 'en';
}

export default i18n;
