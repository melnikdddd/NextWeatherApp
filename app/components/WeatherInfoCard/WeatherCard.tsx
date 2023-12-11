import {ReactNode} from "react";

const WeatherCard = ({children}: {children: ReactNode}) => {
    return (
        <div className={"bg-opacity-20 rounded-lg shadow-lg shadow-slate-600 p-6"}>
            {children}
        </div>
    );
};

export default WeatherCard;