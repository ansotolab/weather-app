<template>
  <el-card class="box-card" style="margin-top: 16px">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold">{{ getName() }}</span>
      <el-button
        icon="el-icon-right"
        style="float: right; padding: 5px"
        circle
        @click="
          $router.push({
            name: 'CityWeather',
            query: { lat: getLatitude(), lon: getLongitude(), name: getName() },
          })
        "
      ></el-button>
    </div>
    <div class="text item">
      <Flag :isoCode="getISOCode()" />
      <span>{{ getCountry() }}</span>
    </div>
  </el-card>
</template>

<script lang="ts">
import City from "@/entities/city";
import { Component, Prop, Vue } from "vue-property-decorator";
import Flag from "./Flag.vue";

@Component({
  components: {
    Flag,
  },
})
export default class CityResult extends Vue {
  @Prop({ required: true })
  city!: City;

  getName(): string {
    return this.city.owm_city_name;
  }

  getCountry(): string {
    return this.city.country_long;
  }

  getLatitude(): string {
    return this.city.owm_latitude;
  }

  getLongitude(): string {
    return this.city.owm_longitude;
  }

  getISOCode(): string {
    return this.city.country_short;
  }
}
</script>
