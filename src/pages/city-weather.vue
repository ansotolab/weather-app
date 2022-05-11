<template>
  <div>
    <h1 style="text-align: center">🌤 El tiempo de alguna ciudad</h1>

    <pre>{{ latitude }}</pre>
    <pre>{{ longitude }}</pre>
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
