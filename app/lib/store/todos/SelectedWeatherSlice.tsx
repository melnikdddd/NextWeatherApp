import {createSlice} from "@reduxjs/toolkit";
import {IWeatherData} from "@/app/lib/defenitions";
import {RootState} from "@/app/lib/store/store";

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

export default SelectedWeatherSlice.reducer;