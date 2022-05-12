<template>
  <el-col :xs="24" :sm="10" :md="5" :lg="3">
    <el-card v-if="day">
      <img :src="getImgUrl()" class="image" />
      <div class="card-body">
        <h3>{{ getDay() }}</h3>
        <MinMaxTemp :minTemp="getMaxTemp()" :maxTemp="getMaxTemp()" />
      </div>
    </el-card>
  </el-col>
</template>

<script lang="ts">
import { Daily } from "@/entities/oneCallResponse";
import { Component, Prop, Vue } from "vue-property-decorator";
import MinMaxTemp from "../MinMaxTemp/MinMaxTemp.vue";

@Component({
  components: {
    MinMaxTemp,
  },
})
export default class DayWeather extends Vue {
  @Prop({ default: {}, required: true })
  day!: Daily;

  getDay() {
    const formatDate = new Date(+this.day.dt * 1000);
    const dayName = formatDate.toLocaleDateString("es-ES", { weekday: "long" });

    return `${dayName} ${formatDate.getDate()}`;
  }

  getMinTemp() {
    return this.day.temp.min.toString().replace(".", ",");
  }

  getMaxTemp() {
    return this.day.temp.max.toString().replace(".", ",");
  }

  getImgUrl() {
    if (this.day.weather) {
      return `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
    } else {
      return "";
    }
  }
}
</script>

<style scoped>
.el-card {
  padding: 0px;
  text-align: center;
}

.card-body {
  padding: 14px;
  text-transform: capitalize;
}
</style>
