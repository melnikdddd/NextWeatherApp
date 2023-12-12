'use client';

import React, {ReactNode} from 'react';
import {useGetThemesClasses} from "@/app/lib/hooks";

import '@/app/theme.scss'
const ThemeWrapper = ({children}: {children: ReactNode}) => {
    const [weatherTypeClass, dayTimeClass] = useGetThemesClasses();
    return (
        <div className={`${weatherTypeClass} ${dayTimeClass} transition-colors`}>
            {children}
        </div>
    );
};

export default ThemeWrapper;
