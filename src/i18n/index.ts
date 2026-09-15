import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

export type SupportedLanguage = "en";

export const resolveInitialLanguage = (): SupportedLanguage => {
  return "en";
};

void i18n.use(initReactI18next).init({
  lng: resolveInitialLanguage(),
  fallbackLng: "en",
  resources: {
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
