import { mount } from "@vue/test-utils";
import Temperature from "./Temperature.vue";

describe("Temperature.vue", () => {
  it("Renders minimum temperature", () => {
    const temperature = "12";
    const type = "min";
    const wrapper = mount(Temperature, {
      propsData: { temperature, type },
    });

    expect(wrapper.text()).toMatch(temperature);
    expect(wrapper.find("span").classes().includes(type)).toBe(true);
  });
});
