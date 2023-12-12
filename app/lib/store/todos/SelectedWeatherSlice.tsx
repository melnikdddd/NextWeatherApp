import {createSlice} from "@reduxjs/toolkit";
import {IWeather, IWeatherData, SuccessfulData} from "@/app/lib/defenitions";
import {RootState} from "@/app/lib/store/store";
import {countingTheDayTime} from "@/app/lib/lib";

const initialState: IWeatherData = null;


const SelectedWeatherSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {
        setData(state, action) {
            return action.payload;
        }
    }
})

export const {setData} = SelectedWeatherSlice.actions;

export const selectWeatherData = (state: RootState) => state.weather;

export const selectDayTime = (state: RootState) => {
    const weatherData: SuccessfulData | null = state.weather;
    if (!weatherData || !weatherData['sys']) return null;
    const {sunset, sunrise} = weatherData['sys'];
    return countingTheDayTime(sunrise, sunset);
}

export const selectWeatherType = (state: RootState) => {
    const weatherData: SuccessfulData | null = state.weather;
    if (!weatherData || !weatherData['weather']) return null;
    const weather: IWeather = weatherData['weather'][0];
    return weather.main.toLowerCase();
}

export default SelectedWeatherSlice.reducer;