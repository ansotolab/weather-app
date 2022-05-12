<template>
  <div class="text item">
    <Flag :isoCode="isoCode" />
    <span>{{ country }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Flag from "@/components/Flag/Flag.vue";

@Component({
  components: {
    Flag,
  },
})
export default class CountryAndFlag extends Vue {
  @Prop({ default: "", required: true })
  isoCode!: string;

  @Prop({ default: "", required: true })
  country!: string;
}
</script>
