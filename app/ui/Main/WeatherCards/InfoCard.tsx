import React, {FC} from 'react';
import {SuccessfulData} from "@/app/lib/defenitions";
import WeatherCard from "@/app/components/WeatherInfoCard/WeatherCard";


interface InfoCardProps{
    weatherInfo: SuccessfulData;
}
const InfoCard:FC<InfoCardProps> = ({weatherInfo}) => {
    return (
        <WeatherCard>
            <div>
                <p>Feels like {Math.round(weatherInfo.main.feels_like)}</p>
                <span>Max: {Math.round(weatherInfo.main.temp_max)} </span>
                <span>Min: {Math.round(weatherInfo.main.temp_min)}</span>
            </div>
            <div>
                <h1>Wind</h1>
                {Math.round(weatherInfo.wind.speed)} M/S
            </div>

        </WeatherCard>
    );
};

export default InfoCard;