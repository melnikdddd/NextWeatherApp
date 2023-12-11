import {IWeatherData} from "@/app/lib/defenitions";

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = process.env.API_KEY;

export const fetchWeather = async () => {

}
export const fetchLocation = async (location: string): Promise<IWeatherData> => {
    try {
        const response = await fetch(`${WEATHER_URL}weather?units=metric&q=${location}&appid=${API_KEY}`);
        return  await response.json();
    } catch (error) {
        console.log('Error fetching cities: ' + error);
        return {cod: "500", message: "Server error"}
    }
}