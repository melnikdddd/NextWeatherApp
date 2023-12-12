import {FC, ReactNode} from 'react';

interface CentralWrapperProps {
    children: ReactNode;
}
const CentralWrapper: FC<CentralWrapperProps> = ({children}) => {
    return (
        <div className={"w-full h-full flex flex-col justify-center items-center text-center"}>
            {children}
        </div>
    );
};

export default CentralWrapper;