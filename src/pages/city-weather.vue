<template>
  <div>
    <h1 style="text-align: center">{{ `🌤 El tiempo de ${name}` }}</h1>

    <el-row v-if="!!cityWeather">
      <DayWeather
        v-for="(day, index) in cityWeather.daily.slice(0, 7)"
        :key="index"
        :day="day"
      ></DayWeather>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WeatherResponse } from "@/entities/oneCallResponse";
import { getWeather } from "@/api/openWeatherAPI";
import DayWeather from "@/components/DayWeather.vue";

@Component({
  components: {
    DayWeather,
  },
})
export default class CityWeatherPage extends Vue {
  @Prop({ default: "", required: true })
  name!: string;

  @Prop({ default: "", required: true })
  latitude!: string;

  @Prop({ default: "", required: true })
  longitude!: string;

  cityWeather: WeatherResponse | null = null;

  async created() {
    const { data } = await getWeather(this.latitude, this.longitude);
    this.cityWeather = data;
  }
}
</script>

<style>
.el-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.el-col {
  margin: 2px;
  border-radius: 4px;
}
</style>
