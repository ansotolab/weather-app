<template>
  <div>
    <el-col :xs="24" :sm="10" :md="5" :lg="3">
      <el-card :body-style="{ padding: '0px' }" v-if="day">
        <img
          :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
          class="image"
        />
        <div style="padding: 14px">
          <span>Lunes 15</span>
          <div class="bottom clearfix">
            <time class="time">12º / 25ª</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Daily } from "@/entities/oneCallResponse";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class DayWeatherPage extends Vue {
  @Prop({ default: {}, required: true })
  day!: Daily;
}
</script>
