<template>
  <el-card class="box-card" style="margin-top: 16px">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold">{{ getName() }}</span>
      <ButtonToCity
        :latitude="getLatitude()"
        :longitude="getLongitude()"
        :name="getName()"
      />
    </div>
    <CountryAndFlag :isoCode="getISOCode()" :country="getCountry()" />
  </el-card>
</template>

<script lang="ts">
import City from "@/entities/city";
import { Component, Prop, Vue } from "vue-property-decorator";
import CountryAndFlag from "./CountryAndFlag/CountryAndFlag.vue";
import ButtonToCity from "./ButtonToCity/ButtonToCity.vue";

@Component({
  components: {
    ButtonToCity,
    CountryAndFlag,
  },
})
export default class CityResult extends Vue {
  @Prop({ required: true })
  city!: City;

  getName(): string {
    return this.city.owm_city_name;
  }

  getCountry(): string {
    return this.city.country_long;
  }

  getLatitude(): string {
    return this.city.owm_latitude;
  }

  getLongitude(): string {
    return this.city.owm_longitude;
  }

  getISOCode(): string {
    return this.city.country_short;
  }
}
</script>
