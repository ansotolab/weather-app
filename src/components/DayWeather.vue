<template>
  <el-col :xs="24" :sm="10" :md="5" :lg="3">
    <el-card
      :body-style="{ padding: '0px' }"
      style="text-align: center"
      v-if="day"
    >
      <img
        :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
        class="image"
      />
      <div style="padding: 14px">
        <h3>{{ getDay() }}</h3>
        <div class="bottom clearfix">
          <span class="min">{{ getMinTemp() }} ºC</span>
          <span> - </span>
          <span class="max">{{ getMaxTemp() }} ºC</span>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script lang="ts">
import { Daily } from "@/entities/oneCallResponse";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
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
}
</script>

<style scoped>
.min {
  color: #409eff;
}

.max {
  color: #f56c6c;
}
</style>
