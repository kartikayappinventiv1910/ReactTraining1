import React, { useEffect } from "react";
import MainTable  from "./maintable";
// import { useSelector, useDispatch } from "react-redux";
// import { LocationApi } from "./action";

function Assignment15() {
//   const dispatch = useDispatch();
//   let {userLocation} = useSelector((state) => 
//     state.locationReducer
// );
//   useEffect(() => {
//     dispatch(LocationApi());
//   }, []);
  return (
    <div>
      {/* <MainTable userLocation={userLocation}/> */}
      <MainTable />
    </div>
  );
}
export default Assignment15;
