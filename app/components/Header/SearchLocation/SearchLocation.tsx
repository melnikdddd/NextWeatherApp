'use client';

import {FC, useState} from 'react';
import {useDebouncedCallback} from "use-debounce";
import {fetchLocation} from "@/app/lib/fetchData";
import {IWeatherData} from "@/app/lib/defenitions";
import {useDispatch} from "react-redux";
import {setData} from "@/app/lib/store/todos/SelectedWeatherSlice";

const SearchLocation: FC = () => {
    const dispatch = useDispatch();

    const handleSearchChange = useDebouncedCallback(async (value: string) => {
        if (!value.length){
            dispatch(setData(null));
            return;
        }
        const location: IWeatherData = await fetchLocation(value);
        dispatch(setData(location));
    }, 500);

    return (
        <div>
            <input
                placeholder={"Enter city..."}
                className={"rounded-lg focus:outline-none px-2 w-64 text-black"}
                onChange={(event) => handleSearchChange(event.target.value)}
            />
        </div>
    );
};

export default SearchLocation;