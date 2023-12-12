import React, {FC} from 'react';
import {SuccessfulData} from "@/app/lib/defenitions";
import WeatherCard from "@/app/components/WeatherInfoCard/WeatherCard";
import moment from "moment";


interface InfoCardProps {
    weatherInfo: SuccessfulData;
}

const InfoCard: FC<InfoCardProps> = ({weatherInfo}) => {
    const sunrise = moment.unix(weatherInfo.sys.sunrise).format('HH:mm').toString();
    const sunset = moment.unix(weatherInfo.sys.sunset).format('HH:mm').toString();
    return (
        <div className={"flex-col  text-2xl"}>
            <div className={"flex gap-x-5"}>
                <WeatherCard>
                    <p className={"text-base"}>FEELS LIKE</p>
                    <p className={"text-center mt-2"}>{Math.round(weatherInfo.main.feels_like)}°</p>
                </WeatherCard>
                <WeatherCard>
                    <h1 className={"text-center text-base"}>WIND</h1>
                    <p className={"text-center mt-2"}>{Math.round(weatherInfo.wind.speed)} M/S</p>
                </WeatherCard>
            </div>
            <WeatherCard classname={"mt-5"}>
                <div>
                    <p className={"text-base text-center mt-5"}>SOLAR CYCLE</p>
                    <div className={"flex w-full justify-between text-lg"}>
                        <div>
                            <p>SUNRISE</p>
                            <p className={"text-center"}>{sunrise}</p>
                        </div>
                        <div >
                            <p>SUNSET</p>
                            <p className={"text-center"}>{sunset}</p>
                        </div>
                    </div>
                </div>
            </WeatherCard>
            <div className={"flex gap-x-5 mt-3"}>
                <WeatherCard>
                    <p className={"text-base text-center"}>VISIBILITY</p>
                    <p className={"text-center mt-2"}>{weatherInfo.visibility / 1000}km</p>
                </WeatherCard>
                <WeatherCard classname={"w-1/2"}>
                    <p className={"text-base text-center"}>CLOUD</p>
                    <p className={"text-center mt-2"}>{weatherInfo.clouds.all}%</p>
                </WeatherCard>
            </div>
        </div>

    );
};

export default InfoCard;