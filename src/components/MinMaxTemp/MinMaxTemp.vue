<template>
  <div class="bottom clearfix">
    <Temperature :temperature="minTemp" :type="'min'" />
    <span> - </span>
    <Temperature :temperature="maxTemp" :type="'max'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Temperature from "../Temperature/Temperature.vue";

@Component({
  components: {
    Temperature,
  },
})
export default class MinMaxTemp extends Vue {
  @Prop({ default: "" })
  minTemp!: string;

  @Prop({ default: "" })
  maxTemp!: string;
}
</script>

<style scoped>
span {
  color: #888888;
}
</style>
