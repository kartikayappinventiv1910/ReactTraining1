import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";
// import { BorderBottom } from "@material-ui/icons";

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
});

function Assignment14() {
  const classes = styles();
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState([]);
  const [searched, setSearched] = useState("");
  const [doSearch, setDoSearch] = useState(false);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    console.log(searched);
  }, [searched]);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const json = await res.json();
    setUsers(json.results);

    users.map((item) => {
      location.push(item.location);
    });

    let locationNew = [];
    location.map((item) => {
      locationNew.push(flattenObject(item));
    });
    setLocation(locationNew);
    // console.log(json.results);
    // json.results.map((item) => {
    // //   console.log(item.location);
    // });
  };

  function flattenObject(object) {
    var locationNew = {};
    for (var i in object) {
      if (!object.hasOwnProperty(i)) continue;

      if (typeof object[i] == "object" && object[i] !== null) {
        var flatObject = flattenObject(object[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          locationNew[x] = flatObject[x];
        }
      } else {
        locationNew[i] = object[i];
      }
    }
    return locationNew;
  }

  //   const handleSearch = (e) => {
  //     if (e.target.value === "") setDoSearch(false);
  //     else {
  //       setDoSearch(true);
  //       let searchValue = e.target.value;
  //       let searchArr = location.filter((item) => {
  //         return (
  //           searchValue.indexOf(item.number) > -1 ||
  //           searchValue.indexOf(item.name.toLowerCase()) > -1 ||
  //           searchValue.indexOf(item.city.toLowerCase()) > -1 ||
  //           searchValue.indexOf(item.state.toLowerCase()) > -1 ||
  //           searchValue.indexOf(item.country.toLowerCase()) > -1 ||
  //           searchValue.indexOf(item.postcode) > -1
  //         );
  //       });
  //       setSearched(searchArr);
  //     }
  //   };

  const handleSearch = (e) => {
    if (e.target.value === "") setDoSearch(false);
    else {
      setDoSearch(true);
      let searchValue = e.target.value;
      // console.log(searchValue);
      // console.log("jsd", locationdata);
      let searchArr = location.filter((current) => {
       return Object.values(current).some((value) =>
        value.toString().includes(searchValue)
        );
      });
      setSearched(searchArr)
    }
  };
  

  function handleSort(key) {
    let arraycopy = [...location];
    // console.log("copy", arrayCopy);
    // console.log("key", key);

    const arrString = JSON.stringify(arraycopy);
    // console.log("arrstr", arrString);
    arraycopy.sort(compareBy(key));
    // console.log("copy", arraycopy);
    if (order === "asc") {
      setOrder("desc");
    }
    if (order === "desc") {
      setOrder("asc");
    }
    setLocation(arraycopy);
    console.log("new", location);
  }

  function compareBy(key) {
    // console.log("asc", key);
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
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(users);
  //   console.log(location);
  return (
    <div className={classes.maincontainer}>
      <div className={classes.headingdata}>
        <h1 className={classes.locationdata}>Location Data</h1>
        <input
          className={classes.searchinput}
          type={"text"}
          id={"search"}
          name={"search"}
          placeholder={"Search the Entry"}
          onKeyUp={handleSearch}
        />
      </div>
      <div className={classes.userTable}>
        <TableContainer>
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
                  searched?.map((item) => {
                    return (
                      <TableRow key={item.number}>
                        <TableCell className={classes.tablebodycell}>
                          {item.number}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.name}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.city}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.state}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.country}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.postcode}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.longitude}
                        </TableCell>
                        <TableCell className={classes.tablebodycell}>
                          {item.latitude}
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
                location?.map((item) => {
                  return (
                    <TableRow key={item.number}>
                      <TableCell className={classes.tablebodycell}>
                        {item.number}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.name}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.city}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.state}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.country}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.postcode}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.longitude}
                      </TableCell>
                      <TableCell className={classes.tablebodycell}>
                        {item.latitude}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Assignment14;

/*
{location?.map((item) => {
  {
     console.log(item.location.street.name);
}
return (
  <>
    <TableBody>
      <TableRow>
        <TableCell className={classes.tablebodycell}>
          {item.number}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.name}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.city}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.state}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.country}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.postcode}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.longitude}
        </TableCell>
        <TableCell className={classes.tablebodycell}>
          {item.latitude}
        </TableCell>
      </TableRow>
    </TableBody>
  </>
);
})} 
*/
