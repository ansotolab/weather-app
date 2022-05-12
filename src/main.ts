import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import router from "./core/router";
import i18n from "./core/i18n";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/index.css";
import "flag-icons/css/flag-icons.css";

Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
