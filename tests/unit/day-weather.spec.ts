import { mount } from "@vue/test-utils";
import DayWeather from "@/components/DayWeather.vue";
import { Daily } from "@/entities/oneCallResponse";

describe("DayWeather.vue", () => {
  it("Renders the day weather", () => {
    const day: Daily = {
      dt: 1652353200,
      sunrise: 1652331285,
      sunset: 1652382253,
      moonrise: 1652367600,
      moonset: 1652324220,
      moon_phase: 0.36,
      temp: {
        day: 21,
        min: 14.57,
        max: 24.35,
        night: 18.84,
        eve: 22.55,
        morn: 15.45,
      },
      feels_like: {
        day: 20.3,
        night: 18.37,
        eve: 21.88,
        morn: 14.59,
      },
      pressure: 1021,
      humidity: 44,
      dew_point: 8.3,
      wind_speed: 4.87,
      wind_deg: 113,
      wind_gust: 4.86,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 98,
      pop: 0,
      uvi: 8.03,
      rain: 0,
    };

    const wrapper = mount(DayWeather, {
      propsData: { day },
    });

    expect(wrapper.text().includes("jueves 12")).toBe(true);
  });
});
