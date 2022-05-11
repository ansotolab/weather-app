<template>
  <el-card class="box-card" style="margin-top: 16px">
    <div slot="header" class="clearfix">
      <span>{{ getName() }}</span>
      <el-button
        icon="el-icon-right"
        style="float: right; padding: 5px"
        circle
        @click="$router.push('/weather')"
      ></el-button>
    </div>
    <div class="text item">
      {{ getCountry() }}
    </div>
  </el-card>
</template>

<script lang="ts">
import City from "@/entities/city";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CityResult extends Vue {
  @Prop({ required: true })
  city!: City;

  getName(): string {
    return this.city.owm_city_name;
  }

  getCountry(): string {
    return this.city.country_long;
  }
}
</script>
