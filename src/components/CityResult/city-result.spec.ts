import { mount } from "@vue/test-utils";
import CityResult from "./CityResult.vue";

describe("CityResult.vue", () => {
  it("Renders city result", () => {
    const city = {
      owm_city_id: "3117735",
      owm_city_name: "Madrid",
      owm_latitude: "40.4165",
      owm_longitude: "-3.70256",
      country_short: "ES",
      country_long: "Spain",
      postal_code: "28013",
    };

    const expectedClass = "box-card";

    const wrapper = mount(CityResult, {
      propsData: { city },
    });

    expect(wrapper.html().includes(expectedClass)).toBe(true);
  });
});
