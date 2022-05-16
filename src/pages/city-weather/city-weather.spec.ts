import { mount } from "@vue/test-utils";
import CityWeatherPage from "./city-weather.vue";
import i18n from "@/core/i18n";
import apiResponseMock from "./mock-data";
import * as weather from "@/api/openWeatherAPI";

describe("CityWeatherPage.vue", () => {
  it("Renders CityWeatherPage page", () => {
    // Mock API call
    const spy = jest.spyOn(weather, "getWeather");
    spy.mockResolvedValueOnce(apiResponseMock);

    // Pass props and properties to render all components
    const wrapper = mount(CityWeatherPage, {
      i18n,
      data() {
        return {
          cityWeather: apiResponseMock.data,
        };
      },
      propsData: {
        name: "Madrid",
        latitude: "12",
        longitude: "12",
      },
    });

    expect(wrapper.html().includes("El tiempo en Madrid")).toBe(true);
  });
});
