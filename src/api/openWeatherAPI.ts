import { WeatherResponse } from "@/entities/oneCallResponse";
import request from "./baseRequest";

export const getWeather = (lat: string, lon: string) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5c46b4bfce8cef2f8b453e5827964b54&exclude=minutely,hourly,alerts&units=metric`;
  return request.get<WeatherResponse>(url);
};
