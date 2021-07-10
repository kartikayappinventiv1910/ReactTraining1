import axios  from "axios";
import {LOCATION_SUCCESS,LOCATION_FAILURE,LOCATION_UPDATE} from "./actionName";

export const locationSuccess = (userLocation) => {
    return{
        type:LOCATION_SUCCESS,
        payload:userLocation,
    }
}

export const locationFailure = (error) => {
    return{
        type:LOCATION_FAILURE,
        payload:error,
    }
}
export const locationUpdate =( userLocation) =>{
    return {
        type:LOCATION_UPDATE,
        payload:userLocation,
    };
};

export function LocationApi(){
    function flattenObj(obj) {
        const location = {};
    
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(location, flattenObj(obj[key]));
          } else {
            location[key] = obj[key];
          }
        });
        return location;
      }

      return async (dispatch)=>{
          try{
          let locationData = [];
          const response = await axios.get("https://randomuser.me/api/?results=4")
          response.data.results.map((item)=>{
              locationData.push(flattenObj(item.location));
          })
          dispatch(locationSuccess(locationData));
        }
        catch(error){
            dispatch(locationFailure(error));
        }
      }
}