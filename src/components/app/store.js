import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import todoSlice from "./todoSlice";
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    dataTodo:todoSlice
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    })
});