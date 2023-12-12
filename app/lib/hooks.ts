import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from '@/app/lib/store/store'
import {selectDayTime, selectWeatherType} from "@/app/lib/store/todos/SelectedWeatherSlice";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;


//redux

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


//hooks

export const useGetThemesClasses = (): [string, string] => {
    const dayTime = useSelector(selectDayTime);
    const weatherType = useSelector(selectWeatherType);

    if (!weatherType || !dayTime) return ['default', 'default'];

    return [ weatherType, dayTime];
}