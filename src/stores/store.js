// import {configureStore} from '@reduxjs/toolkit'
import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { TodoReducers } from "../reducers/TodoReducer";

const reducer  = combineReducers({
    // Storing all the reducers and combining them that is required for running the Todo Asset.
    Todo: TodoReducers
});

const initialState = {};

const middleware = [thunk];
// Then send the reducer to the store for buying or modifying our state from the store shop
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
// export const store = configureStore({

// });
export default store;
