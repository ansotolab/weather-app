<template>
  <div id="app">
    <el-input placeholder="Madrid..." v-model="city"></el-input>
    <CityResult
      v-for="c in getCities()"
      :key="c.owm_city_id"
      :city="c"
    ></CityResult>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import json from "../cities.json";
import City from "@/entities/city";
import CityResult from "@/components/CityResult.vue";

@Component({
  components: { CityResult },
})
export default class App extends Vue {
  city = "";
  cities: City[] = json.cities;

  getCities() {
    if (this.city == "") {
      return [this.cities[1]];
    } else {
      return this.cities.filter((c: City) =>
        c.owm_city_name.includes(this.city)
      );
    }
  }
}
</script>
