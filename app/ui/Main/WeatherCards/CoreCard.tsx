import React, {FC} from 'react';
import WeatherCard from "@/app/components/WeatherInfoCard/WeatherCard";
import {IWeather} from "@/app/lib/defenitions";
import Image from "next/image";

interface CoreCardProps {
    info: IWeather;
    temp: number;
}
const CoreCard:FC<CoreCardProps> = ({info, temp}) => {
    return (
        <WeatherCard>
            <div className={"flex"}>
                <div>
                    <Image src={`http://openweathermap.org/img/w/${info.icon}.png`}
                           alt={'weather-icon'}
                           width={100}
                           height={100}
                    />
                    <p>{info.main}</p>
                    <p className={"capitalize"}>{info.description}</p>
                </div>
                <p>{Math.round(temp)}</p>
            </div>
        </WeatherCard>
    );
};

export default CoreCard;