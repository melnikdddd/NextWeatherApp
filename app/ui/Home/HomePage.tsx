'use client';

import {useSelector} from "react-redux";
import {selectWeatherData} from "@/app/lib/store/todos/SelectedWeatherSlice";
import {IWeatherData, SuccessfulData} from "@/app/lib/defenitions";
import ErrorPage from "@/app/components/ErrorPage/ErrorPage";
import Container from "@/app/components/Wrapper/Container";
import CoreCard from "@/app/ui/Home/WeatherCards/CoreCard";
import InfoCard from "@/app/ui/Home/WeatherCards/InfoCard";
import CentralWrapper from "@/app/components/Wrapper/CentralWrapper";

import '@/app/theme.scss';

const HomePage = () => {
    const weatherData: IWeatherData = useSelector(selectWeatherData);

    if (!weatherData) {
        return (
            <Container>
                <CentralWrapper>
                    <h1 className={"text-center text-3xl"}>
                        Select city
                    </h1>
                </CentralWrapper>
            </Container>
        )
    }

    if (weatherData['message']) {
        return <ErrorPage cod={weatherData['cod']} message={weatherData['message']}/>
    }

    const weather: SuccessfulData = weatherData;
    console.log(weather);
    return (
        <Container>
            <div className={"flex flex-col mt-5"}>
                <div className={`flex w-full justify-around`}>
                    <CoreCard info={weather.weather[0]} temp={weather.main.temp}/>
                    <InfoCard weatherInfo={weather}/>
                </div>
            </div>

        </Container>
    );
};

export default HomePage;