import { translations } from "./locale-EN-NL";

const getLocale = (language, identifier) => {
  try {
    const translation = translations[identifier][language];
    return translation;
  } catch (e) {
    console.log(e);
  }
};

export default getLocale;
