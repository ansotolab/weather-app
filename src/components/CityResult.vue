<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ name }}</span>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CityResult extends Vue {
  @Prop({ default: "Nombre de la ciudad", required: true })
  name!: string;
}
</script>
