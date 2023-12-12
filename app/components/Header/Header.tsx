import {FC} from 'react';
import Container from "@/app/components/Wrapper/Container";
import SearchLocation from "@/app/components/Header/SearchLocation/SearchLocation";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <header className={"w-full py-3 "}>
            <Container>
                <div className={"flex justify-around"}>
                    <SearchLocation/>
                </div>
            </Container>
        </header>
    );
};

export default Header;