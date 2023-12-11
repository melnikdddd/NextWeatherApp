import {combineReducers, configureStore} from "@reduxjs/toolkit";
import selectedWeatherReducer from "@/app/lib/store/todos/SelectedWeatherSlice";

const rootReducer = combineReducers({
    weather: selectedWeatherReducer
})
export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch