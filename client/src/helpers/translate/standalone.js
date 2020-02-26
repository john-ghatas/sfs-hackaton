import translateFile from "./localeEN-NL";

const getTranslation = (language, text) => {
  try {
    const translation = translateFile[text][language];
    return translation;
  } catch (e) {
    console.log(e);
  }
};

export default getTranslation;
