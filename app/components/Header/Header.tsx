import React, {FC} from 'react';
import Container from "@/app/components/Container/Container";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <header className={"w-full h-20 bg-slate-700"}>
            <Container>
                Header
            </Container>
        </header>
    );
};

export default Header;