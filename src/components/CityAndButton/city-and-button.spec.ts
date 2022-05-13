import { mount } from "@vue/test-utils";
import CityAndButton from "./CityAndButton.vue";

describe("CityAndButton.vue", () => {
  it("Renders city and button", () => {
    const latitude = "12";
    const longitude = "12";
    const name = "Madrid";

    const wrapper = mount(CityAndButton, {
      propsData: { latitude, longitude, name },
    });

    expect(wrapper.text()).toMatch(name);
  });
});
