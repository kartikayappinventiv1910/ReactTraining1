import {INCREMENT,DECREMENT,FETCH_SUCCESS_DATA} from "../../utils/actionNames";

const initialState = {
    counter :0,
    userData:[],
}

const counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:return {
            ...state,counter:state.counter+action.payload
        };
        case DECREMENT:return {
            ...state,counter:state.counter-action.payload
        };
        case FETCH_SUCCESS_DATA:return{
            ...state,userData:action.payload
        } 
    
        default:return state;
    }
};
export default counterReducer;