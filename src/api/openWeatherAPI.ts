import { WeatherResponse } from "@/entities/oneCallResponse";
import request from "./baseRequest";

export const getWeather = (lat: string, lon: string) => {
  console.log(process.env);
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_OPENWEATHER_KEY}&exclude=minutely,hourly,alerts&units=metric`;
  return request.get<WeatherResponse>(url);
};
