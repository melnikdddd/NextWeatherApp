import {ReactNode, FC} from "react";


interface WeatherCardProps {
    children: ReactNode;
    classname?: string
}

const WeatherCard: FC<WeatherCardProps> = ({children, classname}) => {
    return (
        <div className={`bg-opacity-70 rounded-lg shadow-md p-6 ${classname}`}>
            {children}
        </div>
    );
};

export default WeatherCard;