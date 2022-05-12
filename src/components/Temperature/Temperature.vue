<template>
  <span :class="type">{{ `${temperature} ºC` }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Temperature extends Vue {
  @Prop({ default: "" })
  temperature!: string;

  @Prop({ default: "min" })
  type!: string;
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
