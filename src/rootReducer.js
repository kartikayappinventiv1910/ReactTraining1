import {combineReducers} from "redux";
import counterReducer from "./modules/assignment11/reducer";
import {locationReducer} from "./modules/assignment15/reducer"

const rootReducer = combineReducers({
    // counterReducer,
    locationReducer,
});

export default rootReducer;
