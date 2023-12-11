'use client';


import {store} from "@/app/lib/store/store";
import {Provider} from "react-redux";
import {ReactNode} from "react";

export const StoreProvider = ({children}: {children: ReactNode}) => {
    return <Provider store={store}>
        {children}
    </Provider>
}