<template>
  <h1 v-if="city == ''">{{ $t("title.withoutName") }}</h1>
  <h1 v-else>{{ $t("title.withName", { name: city }) }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CityResult extends Vue {
  @Prop({ default: "" })
  city!: string;
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
