import i18n from "i18next";
import { reacti18nextModule } from "react-i18next";
import locale from "react-native-locale-detector";
import { AsyncStorage } from "react-native";

import ar from "./ar.json";
import de from "./de.json";
import en from "./en.json";

const STORAGE_KEY = "@APP:languageCode";

const languageDetector = {
  init: Function.prototype,
  type: "languageDetector",
  async: true,
  detect: async callback => {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || locale;
    console.log("detect - selectLanguage", selectLanguage);
    callback(selectLanguage);
  },

  cacheUserLanguage: () => {}
};

i8n
  .use(languageDetector)
  .use(reacti18nextModule)
  .init({
    fallbackLng: "en",
    resources: { en, de, ar },

    // have a common namespace used around the full app
    ns: ["common"],
    defaultNS: "common",

    debug: true,
    cache: {
      enabled: true
    },
    interpolation: {
      escapeValue: false
    }
  });


  export default i18n;