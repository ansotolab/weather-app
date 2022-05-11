export class City {
  owm_city_id!: string;
  owm_city_name!: string;
  owm_latitude!: string;
  owm_longitude!: string;
  owm_country!: string;
  locality_short!: string;
  locality_long!: string;
  admin_level_1_short!: string;
  admin_level_1_long!: string;
  admin_level_2_short!: string;
  admin_level_2_long!: string;
  admin_level_3_short!: string;
  admin_level_3_long!: string;
  admin_level_4_short!: string;
  admin_level_4_long!: string;
  admin_level_5_short!: string;
  admin_level_5_long!: string;
  country_short!: string;
  country_long!: string;
  postal_code!: string;

  getName(): string {
    return this.owm_city_name;
  }

  getLatitude(): number {
    return +this.owm_latitude;
  }

  getLongitude(): number {
    return +this.owm_longitude;
  }
}
