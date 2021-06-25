import {
  INCREMENT,
  DECREMENT,
  FETCH_SUCCESS_DATA,
} from "../../utils/actionNames";

export const incrementNumber = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrementNumber = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};
export const getUserData = () => {
  return (dispatch) => {
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data?.data)
          dispatch({
              type:FETCH_SUCCESS_DATA,
              payload:data?.data,
          })
      });
  };
};
