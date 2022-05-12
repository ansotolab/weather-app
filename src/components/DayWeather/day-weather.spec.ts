import { mount } from "@vue/test-utils";
import DayWeather from "./DayWeather.vue";
import mockDay from "./mock-data";

describe("DayWeather.vue", () => {
  it("Renders the day weather", () => {
    const wrapper = mount(DayWeather, {
      propsData: { day: mockDay },
    });
    console.log(wrapper.html());
    expect(wrapper.text().includes("jueves 12")).toBe(true);
  });
});
