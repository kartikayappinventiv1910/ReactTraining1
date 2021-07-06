import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import Header from "./header";
import Sidebar from "./sidebar";
import DetailedChart from "./detailedchart";
import SearchIcon from "@material-ui/icons/Search";
import { BorderBottom } from "@material-ui/icons";

const styles = makeStyles({
  // BODY HEADER
  Header: {
    overflow: "hidden",
  },
  MainBody: {
    margin: "0px 0px 0px 200px",
  },
  RightContainerHeader: {
    width: "1140px",
    display: "flex",
    padding: "15px 40px",
    borderBottom: "2px solid grey",
  },
  schedule: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  week: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0px 0px 0px 10px",
    color: "blue",
  },
  dropdown: {
    border: "none",
    margin: "5px 15px",
    backgroundColor: "inherit",
    outline: "none",
  },
  searchicon: {
    margin: "0px 200px 0px 0px",
  },
  actionbtn: {
    border: "3px solid blue",
    borderRadius: "30px",
    color: "blue",
    fontWeight: "bold",
    padding: "2px 40px",
  },
  //   LILLI CAFE
  lillicafe: {
    width: "1140px",
    display: "flex",
    padding: "10px 40px",
    borderBottom: "2px solid grey",
  },
  cafeheading: {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "0px 7px",
  },
  headerlist: {
    display: "flex",
    margin: "-20px 10px",
  },
  inactive: {
    fontSize: "0.1em",
    cursor: "pointer",
    margin: "0px 0px 0px 10px",
    width: "100px",
  },
  active: {
    backgroundColor: "blue",
    color: "white",
    padding: "5px 15px",
    width: "70px",
    borderRadius: "20px",
  },
});

function Assignment13() {
  const classes = styles();
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Header}>
        <Header />
      </div>
      <div className={classes.MainBody}>
        <div className={classes.LeftContainer}>
          <Sidebar />
        </div>
        <div className={classes.RightContainer}>
          <div className={classes.RightContainerHeader}>
            <Typography className={classes.schedule}>{"Schedule:"}</Typography>
            <Typography className={classes.week}>{"Week"}</Typography>
            <select className={classes.dropdown}></select>
            <SearchIcon fontSize={"large"} className={classes.searchicon} />
            <Button className={classes.actionbtn}>{"Action"}</Button>
          </div>

          <div className={classes.lillicafe}>
            <Typography className={classes.cafeheading}>
              {"Lilli'sCafe"}
            </Typography>
            <List className={classes.headerlist}>
              <ListItem>
                <ListItemText
                  primary={"+ Mon 11"}
                  className={classes.inactive}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={"+ Tue 12"}
                  className={classes.inactive}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={"+ Wed 13"} className={classes.active} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={"+ Thu 14"}
                  className={classes.inactive}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={"+ Fri 15"}
                  className={classes.inactive}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={"+ Sat 16"}
                  className={classes.inactive}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={"+ Sun 17"}
                  className={classes.inactive}
                />
              </ListItem>
            </List>
          </div>
          <DetailedChart />
          <DetailedChart />
        </div>
      </div>
    </div>
  );
}

export default Assignment13;
