import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { navigationReducer } from '~/redux';
import { keysReducer } from '~/redux/reducers/keys';

import { apiSlice } from '../query/create-api';
import appReducer, { appSlice } from './app-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    keys: keysReducer,
    navigation: navigationReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
