import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import router from "./core/router";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/index.css";

Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
