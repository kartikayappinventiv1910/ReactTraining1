import React, { useContext } from "react";
import { AppContext } from "./context";
import {
  Grid,
  Box,
  Card,
  Typography,
  makeStyles,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

const Styles = makeStyles({
  MainContainer: {
    height: "100%",
  },
  MainHeading: {
    fontSize: "50px",
    fontWeight:"bolder",
    color:"red"
  },
  CardsContainer: {
    width: "99%",
    margin: "30px 10px",
  },
  Cards: {
    padding: "20px",
    borderRadius: "15px",
    height: "300px",
    display: "flex",
  },
  CardBoxColor: {
    width: "40%",
  },
  CardDetail: {
    width: "60%",
  },
  CardDetailHead:{
      fontWeight:"bold",
      fontSize:"25px"
  },
  DetailLabel: {
    paddingTop: "3px",
    marginLeft: "15px",
  },
  DetailBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "15px",
  },
  ChangeBtnBox: {
    width: "20%",
    height: "125px",
    margin: "10px 555px",
  },
ThemeButton:{
    border:"1px solid black",
    backgroundColor:"green",
    color:"white",
    fontSize:"20px",
    padding:"3px 10px"
}
});

function ColorsDetails() {
  const classes = Styles();
  const { appState, dispatch } = useContext(AppContext);
  const { colorState, themeState } = appState;
  return (
    <Box style={themeState.Theme} className={classes.MainContainer}>
      <Typography
        className={classes.MainHeading}
        align={"center"}
      >{"CARDS"}
      </Typography>
      <Grid className={classes.CardsContainer} container spacing={6}>
        {colorState.colorsData?.map((curr, ind) => (
          <Grid key={ind} item lg={4}>
            <Card className={classes.Cards}>
              <Box
                className={classes.CardBoxColor}
                style={{ backgroundColor: curr.color }}
              ></Box>
              <Box className={classes.CardDetail}>
                <Typography className={classes.CardDetailHead} align={"center"}>
                  {"CARD DETAILS"}
                </Typography>
                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"color name:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {curr.name}
                  </Typography>
                </Box>

                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"color code:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {curr.color}
                  </Typography>
                </Box>
                <Box className={classes.DetailBox}>
                  <Typography variant={"h5"}>{"year:"}</Typography>
                  <Typography className={classes.DetailLabel} variant={"h6"}>
                    {curr.year}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className={classes.ChangeBtnBox} pb={3}>
        <FormControlLabel
          value="bottom"
          control={
            <Button
            className={classes.ThemeButton}
              color="inherit"
              onClick={() => dispatch.themeDispatch({ type: "ChangeTheme" })}
            >CHANGE THEME</Button>
          }
          label={themeState.CurrentTheme}
        />
      </Box>
    </Box>
  );
}

export default ColorsDetails;