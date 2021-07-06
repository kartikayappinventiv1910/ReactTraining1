import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import image1 from "./6.jpeg";
import image2 from "./user.png";

const styles = makeStyles({
  HeaderContainer: {
    width: "1450px",
    display: "flex",
    borderBottom: "2px solid grey",
    height: "48px",
    backgroundColor: "white",
  },
  Homeicon: {
    width: "60px",
    height: "50px",
    color: "white",
    backgroundColor: "blue",
  },
  headerimage: {
    borderRadius: "20px",
    width: "40px",
    margin: "5px 30px",
    height: "40px",
  },
  cafelovers: {
    fontSize: "27px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: "5px 0px",
  },
  dropdown: {
    border: "none",
    margin: "5px 15px",
    backgroundColor: "white",
    outline: "none",
  },
  headerlist: {
    display: "flex",
  },
  inactive: {
    fontSize: "0.1em",
    cursor: "pointer",
    margin: "0px 10px",
  },
  active: {
    color: "blue",
    borderBottom: "3px solid blue",
  },
  notificationicon: {
    margin: "18px 0px 0px 190px",
  },
  userimage: {
    width: "30px",
    borderRadius: "30px",
    height: "30px",
    margin: "15px 0px 0px 30px",
  },
  username: {
    fontSize: "18px",
    margin: "15px 20px",
  },
});

function Header() {
  const classes = styles();
  return (
    <div className={classes.HeaderContainer}>
      <HomeIcon fontSize={"large"} className={classes.Homeicon} />
      <img src={image1} className={classes.headerimage}></img>
      <Typography className={classes.cafelovers}>{"Cafe Lovers"}</Typography>
      <select className={classes.dropdown}></select>
      <List className={classes.headerlist}>
        <ListItem>
          <ListItemText primary={"Dashboard"} className={classes.inactive} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Schedule"} className={classes.active} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Messenger"} className={classes.inactive} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Reports"} className={classes.inactive} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Staff"} className={classes.inactive} />
        </ListItem>
      </List>
      <NotificationsNoneIcon className={classes.notificationicon} />
      <img src={image2} className={classes.userimage}></img>
      <Typography className={classes.username}>{"Anton"}</Typography>
      <select className={classes.dropdown}></select>
    </div>
  );
}
export default Header;
