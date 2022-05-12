import { shallowMount } from "@vue/test-utils";
import CityAndButton from "./CityAndButton.vue";

describe("CityAndButton.vue", () => {
  it("Renders country name", () => {
    const latitude = "12";
    const longitude = "12";
    const name = "Madrid";

    const wrapper = shallowMount(CityAndButton, {
      propsData: { latitude, longitude, name },
    });

    expect(wrapper.text()).toMatch(name);
  });
});
