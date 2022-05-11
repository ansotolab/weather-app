<template>
  <div>
    <h1 style="text-align: center">🌤 El tiempo de alguna ciudad</h1>

    <pre>{{ latitude }}</pre>
    <pre>{{ longitude }}</pre>

    <el-row>
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple">1</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple-light">2</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple">3</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple-light">4</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple">5</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple-light">6</div></el-col
      >
      <el-col :xs="24" :sm="10" :md="5" :lg="3"
        ><div class="grid-content bg-purple">7</div></el-col
      >
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class CityWeatherPage extends Vue {
  @Prop({ default: "", required: true })
  latitude!: string;

  @Prop({ default: "", required: true })
  longitude!: string;
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
