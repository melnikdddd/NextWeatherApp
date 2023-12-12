'use client';

import {FC, useEffect, useState} from 'react';
import {useDebouncedCallback} from "use-debounce";
import {fetchLocation} from "@/app/lib/fetchData";
import {IWeatherData} from "@/app/lib/defenitions";
import {useDispatch} from "react-redux";
import {setData} from "@/app/lib/store/todos/SelectedWeatherSlice";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {router} from "next/client";

const SearchLocation: FC = () => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    useEffect(() => {
        const firstRenderFetch = async () => {
            const location = searchParams.get('location')?.toString();
            if (!location) {
                return;
            }
            dispatch(setData(await fetchLocation(location)));
        }

        firstRenderFetch();

    }, []);

    const handleSearchChange = useDebouncedCallback(async (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (!value.length) {
            params.delete('location');
            dispatch(setData(null));
        } else {
            params.set('location', value);
            const location: IWeatherData = await fetchLocation(value);
            dispatch(setData(location));
        }
        replace(`${pathname}?${params.toString()}`);

    }, 500);

    return (
        <div>
            <input
                placeholder={"Enter city..."}
                className={"rounded-lg focus:outline-none px-2 py-1 text-lg w-72"}
                onChange={(event) => handleSearchChange(event.target.value)}
                defaultValue={searchParams.get('location')?.toString()}
            />
        </div>
    );
};

export default SearchLocation;