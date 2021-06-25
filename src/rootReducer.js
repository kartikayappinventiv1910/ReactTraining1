import {combineReducers} from "redux";
import counterReducer from "./modules/assignment11/reducer";

const rootReducer = combineReducers({
    counterReducer,
});

export default rootReducer;
