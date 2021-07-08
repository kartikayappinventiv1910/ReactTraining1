import {LOCATION_SUCCESS,LOCATION_FAILURE,LOCATION_UPDATE} from "./actionName";

export const initialState={
    userLocation:[],
    error:"",
}

export const locationReducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOCATION_SUCCESS:return{
            userLocation:action.payload,
            error:"",
        }
        case LOCATION_FAILURE: return{
            userLocation:[],
            error:action.payload,
        }
        case LOCATION_UPDATE: return{
            userLocation:[action.payload],
            error:"",
        }
        default:return state;
    }
}