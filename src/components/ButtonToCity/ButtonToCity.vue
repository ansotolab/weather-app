<template>
  <el-button
    icon="el-icon-right"
    circle
    @click="
      $router.push({
        name: 'CityWeather',
        query: { lat: latitude, lon: longitude, name: name },
      })
    "
  ></el-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonToCity extends Vue {
  @Prop({ default: "", required: true })
  latitude!: string;

  @Prop({ default: "", required: true })
  longitude!: string;

  @Prop({ default: "", required: true })
  name!: string;
}
</script>

<style scoped>
.el-button {
  float: right;
  padding: 5px;
}
</style>
