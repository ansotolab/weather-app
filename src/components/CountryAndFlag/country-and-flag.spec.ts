import { shallowMount } from "@vue/test-utils";
import CountryAndFlag from "./CountryAndFlag.vue";

describe("CountryAndFlag.vue", () => {
  it("Renders country name", () => {
    // Get code with upper and lower letters
    const country = "Spain";

    const wrapper = shallowMount(CountryAndFlag, {
      propsData: { country: country, isoCode: "" },
    });

    expect(wrapper.text()).toMatch(country);
  });
});
