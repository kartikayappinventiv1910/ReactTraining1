import React from "react";
import { initialColorState, initialThemeState } from "./reducer";

export const AppContext = React.createContext({
  initialColorState,
  initialThemeState,
});

// export const Data = () => {
//     return (dispatch) => {
//       fetch("https://reqres.in/api/unknown")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data?.data)
//             // dispatch({
//             //     type:FETCH_SUCCESS_DATA,
//             //     payload:data?.data,
//             // })
//         });
//     };
//   };
  