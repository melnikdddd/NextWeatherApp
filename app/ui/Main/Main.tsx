'use client';

import {useSelector} from "react-redux";
import {selectWeatherData} from "@/app/lib/store/todos/SelectedWeatherSlice";
import {IWeatherData, SuccessfulData} from "@/app/lib/defenitions";
import ErrorPage from "@/app/components/ErrorPage/ErrorPage";
import Container from "@/app/components/Container/Container";
import CoreCard from "@/app/ui/Main/WeatherCards/CoreCard";
import InfoCard from "@/app/ui/Main/WeatherCards/InfoCard";

const Main = () => {
    const weatherData: IWeatherData = useSelector(selectWeatherData);

    if (!weatherData) {
        return (
            <Container>
                <p>
                    Select city
                </p>
            </Container>
        )
    }

    if (  weatherData.message) {
        return <Container>
            <ErrorPage cod={weatherData.cod} message={weatherData.message}/>
        </Container>
    }

    const weather: SuccessfulData = weatherData;
    console.log(weather);
    return (
        <Container>
            <div className={"flex"}>
                <CoreCard info={weather.weather[0]} temp={weather.main.temp}/>
                <InfoCard weatherInfo={weather}/>
            </div>
        </Container>
    );
};

export default Main;