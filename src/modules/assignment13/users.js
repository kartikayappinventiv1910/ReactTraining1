import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import { BorderBottom } from "@material-ui/icons";
import WarningIcon from "@material-ui/icons/Warning";
import Bar from "./bar.jpeg";
import image2 from "./user.png";

const styles = makeStyles({
    gridcontainer: {
        margin: "10px 40px",
      },
      dropdown: {
        border: "none",
        margin: "5px 15px",
        backgroundColor: "inherit",
        outline: "none",
      },
      row3title: {
        backgroundColor: "#ecedeb",
        height: "110px",
        borderRadius: "15px",
        marginRight: "28px",
      },
      userimage: {
        width: "30px",
        borderRadius: "30px",
        height: "30px",
        margin: "10px 0px 0px 10px",
      },
      username: {
        color: "black",
        fontWeight: "bold",
        margin: "10px ",
      },
      row3titletime: {
        margin: "-10px 45px",
        color: "grey",
      },
      usernamediv: {
        display: "flex",
      },
      row3: {
        height: "110px",
        marginRight: "28px",
        backgroundColor: "white",
        padding: "35px 45px 5px 45px",
        border: "1px solid lightgrey",
        borderRadius: "7px",
      },
});

function User(){
    const classes = styles();
    return(
        <div>
        <Grid container spacing={0} className={classes.gridcontainer}>
          <Grid item lg={2} className={classes.row3title}>
            <Box>
              <div className={classes.usernamediv}>
                <img src={image2} className={classes.userimage}></img>
                <Typography className={classes.username}>UserName</Typography>
                <select className={classes.dropdown}></select>
              </div>
              <Typography className={classes.row3titletime}>
                00h of 40h +0h
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row3}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
        </Grid>
        </div>
    );
}
export default User;