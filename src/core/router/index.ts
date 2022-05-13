import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const constantRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/home.vue"),
  },
  {
    path: "/weather",
    name: "CityWeather",
    component: () => import("@/pages/city-weather/city-weather.vue"),
    props: (route) => ({
      latitude: route.query.lat,
      longitude: route.query.lon,
      name: route.query.name,
    }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

export default router;
