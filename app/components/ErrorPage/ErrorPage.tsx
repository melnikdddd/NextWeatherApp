import {FC} from "react";
import Container from "@/app/components/Wrapper/Container";
import CentralWrapper from "@/app/components/Wrapper/CentralWrapper";

interface ErrorPageProps {
    cod: string;
    message: string;
}

const ErrorPage: FC<ErrorPageProps> = ({cod, message}) => {
    return (
        <Container>
            <CentralWrapper>
                <div className={"flex-col justify-center items-center w-full"}>
                    <p className={"text-7xl"}>{cod}</p>
                    <p className={"text-xl"}>{message}</p>
                </div>
            </CentralWrapper>
        </Container>

    );
};

export default ErrorPage;