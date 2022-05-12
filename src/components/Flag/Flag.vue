<template>
  <span :class="`fi fi-${getISOCode()} fis`"></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Flag extends Vue {
  @Prop({ default: "", required: true })
  isoCode!: string;

  getISOCode() {
    return this.isoCode.toLowerCase();
  }
}
</script>

<style scoped>
.fi {
  margin-right: 8px;
}
</style>
