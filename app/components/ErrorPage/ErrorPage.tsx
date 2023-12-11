import {FC} from "react";

interface ErrorPageProps {
    cod: string;
    message: string;
}
const ErrorPage:FC<ErrorPageProps> = ({cod, message}) => {
    return (
        <div className={"flex-col justify-center items-center w-full"}>
            <p className={"text-7xl text-slate-500"}>{cod}</p>
            <p className={"text-xl text-slate-500"}>{message}</p>
        </div>
    );
};

export default ErrorPage;