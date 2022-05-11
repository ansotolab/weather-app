<template>
  <div id="app">
    <el-input placeholder="Madrid..." v-model="city"></el-input>
    <pre>{{ getCities() }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import json from "../cities.json";
import City from "./entities/city";

@Component({})
export default class App extends Vue {
  city = "";
  cities: City[] = json.cities;

  getCities() {
    if (this.city == "") {
      return this.cities[1];
    } else {
      return this.cities.filter((c: City) =>
        c.owm_city_name.includes(this.city)
      );
    }
  }
}
</script>
