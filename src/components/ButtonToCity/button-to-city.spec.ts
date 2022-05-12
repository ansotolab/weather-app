import { shallowMount } from "@vue/test-utils";
import ButtonToCity from "./ButtonToCity.vue";

describe("ButtonToCity.vue", () => {
  it("Renders country name", () => {
    const latitude = "12";
    const longitude = "12";
    const name = "Madrid";

    const expectedClass = "el-icon-right";

    const wrapper = shallowMount(ButtonToCity, {
      propsData: { latitude, longitude, name },
    });

    expect(wrapper.html().includes(expectedClass)).toBe(true);
  });
});
