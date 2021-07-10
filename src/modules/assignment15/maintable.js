import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Button,
} from "@material-ui/core";
import { locationUpdate } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { LocationApi } from "./action";

const styles = makeStyles({
  maincontainer: {
    backgroundColor: "#cdeef7",
    marginTop: "-22px",
  },
  headingdata: {
    marginLeft: "550px",
  },
  locationdata: {
    marginLeft: "50px",
  },
  searchinput: {
    width: "350px",
    border: "none",
    outline: "none",
    borderRadius: "15px",
    padding: "10px 15px",
    fontSize: "20px",
    margin: "20px 50px",
  },
  userTable: {
    border: "3px solid black",
    marginTop: "40px",
  },
  tablehead: {
    backgroundColor: "#e9f5ee",
    cursor: "pointer",
  },
  tableheadcell: {
    width: "100px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRight: "1px solid black",
    borderBottom: "0.5px solid black",
  },
  tablebodycell: {
    backgroundColor: "white",
    borderRight: "1px solid black",
  },
  textfield: {
    outline: "none",
    textDecoration: "none",
    border: "none",
    width: "140px",
  },
  savebtn: {
    backgroundColor: "#2cc755",
    fontSize: "17px",
    fontWeight: "bold",
    color: "white",
    marginLeft: "200px",
  },
  error:{
      border:"1px solid red",
    //   backgroundColor:"red"
  }
});

export default function MainTable(props) {
  const classes = styles();
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const [doSearch, setDoSearch] = useState(false);
  const [order, setOrder] = useState("asc");
  const [savebtn, setSaveBtn] = useState(true);
  const [sorted, setSorted] = useState([]);
  const [error,setError] = useState(false);

  let { userLocation } = useSelector((state) => state.locationReducer);

  useEffect(() => {
    dispatch(LocationApi());
  }, []);

  useEffect(() => {
    setSorted([...userLocation]);
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") setDoSearch(false);
    else {
      setDoSearch(true);
      let searchValue = e.target.value;
    //   console.log(searchValue)
      let searchArr = sorted.filter((current) => {
        return Object.values(current).some((value) =>
          value.toString().toLowerCase().includes(searchValue)
        );
      });
      setSearched(searchArr);
    }
  };

  function handleSort(key) {
    // let arraycopy = [...sorted];
    // console.log("copy", arrayCopy);
    // console.log("key", key);
    // console.log(sorted);
    // arraycopy.sort(compareBy(key));
    setSorted(sorted.sort(compareBy(key)));
    if (order === "asc") {
      setOrder("desc");
    }
    if (order === "desc") {
      setOrder("asc");
    }
    // setSorted(arraycopy);
    // console.log(arraycopy);
    console.log(sorted);
    // console.log("new", location);
  }

  function compareBy(key) {
    return function (a, b) {
      if (order === "asc") {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
      if (order === "desc") {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      }
    };
  }
  const oldData = JSON.parse(JSON.stringify(sorted));

  function handleTextfield(row, column, value) {
    setSaveBtn(false);
    // const oldData=JSON.parse(JSON.stringify(sorted));
    console.log(oldData);
    oldData[row][column] = value;
    handleInput(row,column,value);
    setSorted(oldData);
    // console.log("changed", sorted);
  }

  function handleSubmit() {
    dispatch(locationUpdate(oldData));
    console.log(sorted);
    setSaveBtn(true);
    setError(false)
  }

  function handleInput(row,column,value) {
      if(value==""){
          setSaveBtn(true);
          setError(true);
      }
      else{
          setSaveBtn(false);
          setError(false)
      }
  }

  return (
    <div className={classes.maincontainer}>
      <h1 className={classes.headingdata}>API DATA</h1>
      <TableContainer>
        <input
          className={classes.searchinput}
          type={"text"}
          id={"search"}
          name={"search"}
          placeholder={"Search the Entry"}
          onKeyUp={handleSearch}
        />
        <Button
          disabled={savebtn}
          className={classes.savebtn}
          onClick={handleSubmit}
        >
          Save
        </Button>
        <Table>
          <TableHead>
            <TableRow className={classes.tablehead}>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("number")}
              >
                Street No.
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("name")}
              >
                Street Name
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("city")}
              >
                City
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("state")}
              >
                State
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("country")}
              >
                Country
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("postcode")}
              >
                Post Code
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("longitude")}
              >
                Longitude
              </TableCell>
              <TableCell
                className={classes.tableheadcell}
                onClick={() => handleSort("latitude")}
              >
                Latitude
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doSearch ? (
              searched.length > 0 ? (
                searched?.map((item, index) => {
                  return (
                    <TableRow key={item.number}>
                      <TableCell className={classes.tablebodycell}>
                        <input
                          //   defaultValue={item.number}
                          value={item.number}
                          className={`${classes.textfield} ${error && classes.error}`}
                          onChange={(e) =>
                            handleTextfield(index, "number", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.name}
                          value={item.name}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "name", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.city}
                          value={item.city}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "city", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.state}
                          value={item.state}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "state", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.country}
                          value={item.country}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "country", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.postcode}
                          value={item.postcode}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "postcode", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.longitude}
                          value={item.longitude}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "longitude", e.target.value)
                          }
                        ></input>
                      </TableCell>
                      <TableCell className={`${classes.textfield} ${error && classes.error}`}>
                        <input
                          //   defaultValue={item.latitude}
                          value={item.latitude}
                          className={classes.textfield}
                          onChange={(e) =>
                            handleTextfield(index, "latitude", e.target.value)
                          }
                        ></input>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>{"NO SUCH DATA"}</TableCell>
                </TableRow>
              )
            ) : (
              sorted?.map((item, index) => {
                return (
                  <TableRow key={item.index}>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.number}
                        value={item.number}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "number", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.name}
                        value={item.name}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "name", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.city}
                        value={item.city}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "city", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.state}
                        value={item.state}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "state", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.country}
                        value={item.country}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "country", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.postcode}
                        value={item.postcode}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "postcode", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.longitude}
                        value={item.longitude}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "longitude", e.target.value)
                        }
                      ></input>
                    </TableCell>
                    <TableCell className={`${classes.tablebodycell} ${error && classes.error}`}>
                      <input
                        // defaultValue={item.latitude}
                        value={item.latitude}
                        className={classes.textfield}
                        onChange={(e) =>
                          handleTextfield(index, "latitude", e.target.value)
                        }
                      ></input>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
