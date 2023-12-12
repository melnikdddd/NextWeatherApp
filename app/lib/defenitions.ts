export interface ISys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface IClouds {
    all: number;
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IWind {
    speed: number;
    deg: number;
}

export interface iMain {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}


export interface SuccessfulData {
    id: number;
    name: string;
    base: string;
    clouds: IClouds;
    cod: string;
    coord: ICoord;
    dt: number;
    main: iMain;
    sys: ISys;
    weather: IWeather[];
    wind: IWind;
    visibility: number;
}

export interface UnSuccessfulData {
    cod: string;
    message: string;
}

export type IWeatherData = UnSuccessfulData | SuccessfulData | null;
