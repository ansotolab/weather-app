import { mount } from "@vue/test-utils";
import CityWeatherPage from "./city-weather.vue";
import i18n from "@/core/i18n";
import apiResponseMock from "./mock-data";
import * as weather from "@/api/openWeatherAPI";

describe("CityWeatherPage.vue", () => {
  it("Renders CityWeatherPage page", () => {
    const spy = jest.spyOn(weather, "getWeather");
    spy.mockResolvedValueOnce(apiResponseMock);
    const wrapper = mount(CityWeatherPage, {
      i18n,
      propsData: {
        name: "Madrid",
        latitude: "12",
        longitude: "12",
      },
    });

    expect(wrapper.html().includes("El tiempo en Madrid")).toBe(true);
  });
});
