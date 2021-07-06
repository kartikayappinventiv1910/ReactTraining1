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
import Users from "./users"
import { BorderBottom } from "@material-ui/icons";
import WarningIcon from "@material-ui/icons/Warning";
import Bar from "./bar.jpeg";
import image2 from "./user.png";

const styles = makeStyles({
    cafeheading: {
        fontSize: "25px",
        fontWeight: "bold",
        margin: "0px 7px",
      },
  barheader: {
    display: "flex",
    padding: "10px 40px",
  },
  barimage: {
    width: "40px",
    borderRadius: "30px",
    height: "40px",
    margin: "10px 0px 0px 0px",
  },
  employee: {
      width:"250px",
    margin: "30px -50px",
    fontSize: "15px",
    color: "grey",
  },
  warning: {
    color: "red",
    margin: "20px 20px 0px 600px",
  },
  conflict: {
      width:"150px",
    color: "red",
    margin: "20px 20px 0px 0px",
  },
  dropdown: {
    border: "none",
    margin: "5px 15px",
    backgroundColor: "inherit",
    outline: "none",
  },
  actionbtn2: {
    border: "3px solid blue",
    borderRadius: "30px",
    color: "blue",
    fontWeight: "bold",
    height: "45px",
    padding: "4px 35px",
    margin: "10px -80px",
  },
  gridcontainer: {
    margin: "10px 40px",
  },
  row1title: {
    height: "60px",
    backgroundColor: "#ecedeb",
    borderRadius: "10px",
    margin: "-20px 28px 0px 0px",
    padding: "7px",
  },
  row1: {
    height: "60px",
    backgroundColor: "#ecedeb",
    borderRadius: "10px",
    margin: "-20px 28px 0px 0px",
    padding: "20px 30px",
  },
  row2title: {
    height: "30px",
    backgroundColor: "#def7d0",
    borderRadius: "7px",
    padding: "5px 20px",
    marginRight: "26px",
  },
  openshifts: {
    fontWeight: "bold",
    color: "#447528",
    paddingRight: "0px",
  },
  row2: {
    height: "30px",
    marginRight: "28px",
    backgroundColor: "white",
    padding: "5px 45px 5px 45px",
    border: "1px solid lightgrey",
    borderRadius: "7px",
  },
});

function DetailedChart() {
  const classes = styles();
  return (
    <div>
      <div className={classes.barheader}>
        <img src={Bar} className={classes.barimage}></img>
        <Typography className={classes.cafeheading}>{"Bar"}</Typography>
        <Typography className={classes.employee}>{"2 Employees"}</Typography>
        <WarningIcon fontSize={"larger"} className={classes.warning} />
        <Typography className={classes.conflict}>{"1 Conflict"}</Typography>
        <Button className={classes.actionbtn2}>{"Action"}</Button>
      </div>
      <div>
        <Grid container spacing={0} className={classes.gridcontainer}>
          <Grid item lg={2} className={classes.row1title}>
            <Box>
              <Typography>Total Shifts</Typography>
              <Typography variant="h6">00h of 00h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row1}>
            <Box>
              <Typography>3/ 0h</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridcontainer}>
          <Grid item lg={2} className={classes.row2title}>
            <Box display="flex">
              <Typography className={classes.openshifts}>
                Open Shifts
              </Typography>
              <select className={classes.dropdown}></select>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
          <Grid item lg={1} className={classes.row2}>
            <Box>
              <Typography>+</Typography>
            </Box>
          </Grid>
        </Grid>
        <Users />
        <Users />
      </div>
    </div>
  );
}
export default DetailedChart;
