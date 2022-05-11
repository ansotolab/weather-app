<template>
  <div>
    <h1 style="text-align: center">🌤 El tiempo</h1>

    <el-form :inline="true" v-model="search" style="text-align: center">
      <el-form-item>
        <el-input placeholder="Madrid..." v-model="search.city"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          icon="el-icon-search"
          circle
          @click="getCities()"
        ></el-button>
      </el-form-item>
    </el-form>

    <p style="text-align: center">
      {{ `${result.length} coincidencias.` }}
    </p>

    <CityResult v-for="c in result" :key="c.owm_city_id" :city="c"></CityResult>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import json from "../../cities.json";
import City from "@/entities/city";
import CityResult from "@/components/CityResult.vue";

@Component({
  components: { CityResult },
})
export default class HomePage extends Vue {
  search = { city: "" };
  cities: City[] = json.cities;
  result: City[] = [];

  getCities() {
    if (this.search.city == "") {
      this.result = [];
    } else {
      this.result = this.cities.filter((c: City) =>
        c.owm_city_name.includes(this.search.city)
      );
    }
  }
}
</script>
