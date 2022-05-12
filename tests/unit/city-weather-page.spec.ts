import { mount } from "@vue/test-utils";
import CityWeatherPage from "@/pages/city-weather.vue";
import MockReponse from "./mockOpenWeatherApi";
import * as api from "@/api/openWeatherAPI";
import { AxiosResponse } from "axios";
import DayWeather from "@/components/DayWeather.vue";

describe("CityWeatherPage.vue", () => {
  it("Renders the forecast week weather", () => {
    const name = "Madrid";
    const latitude = "12.0001";
    const longitude = "139.0002";
    const cityWeather = MockReponse;
    jest
      .spyOn(api, "getWeather")
      .mockResolvedValueOnce({ data: MockReponse } as AxiosResponse);

    const wrapper = mount(CityWeatherPage, {
      propsData: { name, latitude, longitude, cityWeather },
    });
    const dayWeather = wrapper.findComponent(DayWeather);

    expect(wrapper.text().includes("Madrid")).toBe(true);
  });
});
