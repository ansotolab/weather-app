<template>
  <div slot="header" class="clearfix">
    <span>{{ name }}</span>
    <ButtonToCity :latitude="latitude" :longitude="longitude" :name="name" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonToCity from "@/components/ButtonToCity/ButtonToCity.vue";

@Component({
  components: {
    ButtonToCity,
  },
})
export default class CityAndButton extends Vue {
  @Prop({ default: "", required: true })
  latitude!: string;

  @Prop({ default: "", required: true })
  longitude!: string;

  @Prop({ default: "", required: true })
  name!: string;
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
