import { mount } from "@vue/test-utils";
import CountryAndFlag from "./CountryAndFlag.vue";

describe("CountryAndFlag.vue", () => {
  it("Renders country name and flag", () => {
    const country = "Spain";

    const wrapper = mount(CountryAndFlag, {
      propsData: { country: country, isoCode: "" },
    });

    expect(wrapper.text()).toMatch(country);
  });
});
