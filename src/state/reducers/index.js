import { combineReducers } from "redux";
import { bankReducer, bugReducer } from "./bankReducer"


const reducers = combineReducers({
    bankReducer,
    bugReducer
})

export default reducers;