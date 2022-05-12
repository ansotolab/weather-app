import VueI18n from "vue-i18n";
import Vue from "vue";
import esLocale from "./es";

Vue.use(VueI18n);

const messages = {
  es: esLocale,
};

const i18n = new VueI18n({
  locale: "es",
  // set locale messages
  messages,
});

export default i18n;
