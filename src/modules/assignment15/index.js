import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainTable  from "./maintable";
import { LocationApi } from "./action";
import Assignment14 from "../assignment14";

function Assignment15() {
  const dispatch = useDispatch();
  let {userLocation} = useSelector((state) => 
    state.locationReducer
);
  useEffect(() => {
    dispatch(LocationApi());
  }, []);
  return (
    <div>
      <MainTable userLocation={userLocation}/>
    </div>
  );
}
export default Assignment15;
