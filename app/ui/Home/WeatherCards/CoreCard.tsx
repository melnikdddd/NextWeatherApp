import React, {FC} from 'react';
import WeatherCard from "@/app/components/WeatherInfoCard/WeatherCard";
import {IWeather} from "@/app/lib/defenitions";
import Image from "next/image";

interface CoreCardProps {
    info: IWeather;
    temp: number;
}

const CoreCard: FC<CoreCardProps> = ({info, temp}) => {
    return (
        <WeatherCard>
            <div className={"flex p-10"}>
                <div>
                    <Image src={`http://openweathermap.org/img/w/${info.icon}.png`}
                           alt={'weather-icon'}
                           width={200}
                           height={200}
                    />
                    <p className={"text-3xl"}>
                        {info.main}
                    </p>
                    <p className={"capitalize text-2xl"}>
                        {info.description}
                    </p>
                </div>
                <p className={"text-8xl"}>{Math.round(temp)}°</p>
            </div>
        </WeatherCard>
    );
};

export default CoreCard;