import { mount } from "@vue/test-utils";
import MinMaxTemp from "./MinMaxTemp.vue";

describe("MinMaxTemp.vue", () => {
  it("Renders minimum temperature", () => {
    const minTemp = "12";
    const maxTemp = "25";
    const wrapper = mount(MinMaxTemp, {
      propsData: { minTemp, maxTemp },
    });

    expect(wrapper.html().includes(minTemp)).toBe(true);
    expect(wrapper.html().includes(maxTemp)).toBe(true);
  });
});
