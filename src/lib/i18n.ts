import en from "../../locales/en.json";
import te from "../../locales/te.json";

export type Language = "en" | "te";

export const translations = {
  en,
  te,
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}

