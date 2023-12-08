import {ReactNode, FC} from 'react';


interface ContainerProps{
    children: ReactNode;
}
const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"container m-auto"}>
            {children}
        </div>
    );
};

export default Container;