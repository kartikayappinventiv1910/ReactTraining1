import React from "react";
import {
  Drawer,
  Typography,
  Checkbox,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles({
  sideBarContainer: {
    marginTop: "20px",
  },
  sideBar: {
    "& .MuiDrawer-paperAnchorDockedLeft": {
      width: "12.5%",
      backgroundColor: "#f5f7fa",
      zIndex: "-1",
      paddingTop: "68px",
      paddingRight: "15px",
    },
  },
  styleListHeading: {
    margin: "37px 0 9px 25px",
    color: "#2f73eb",
  },
  styleListItem: {
    height: "37px",
  },
  styleLastListItems: {
    fontWeight: "300",
  },
  styleSubHeadingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "23px",
    marginBottom: "10px",
  },
  styleSubHeading: {
    marginLeft: "30px",
    fontWeight: "700",
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer className={classes.sideBar} variant={"permanent"}>
      <Box>
        <Typography className={classes.styleListHeading} variant={"body1"}>
          {"VIEW"}
        </Typography>
        <List disablePadding>
          <ListItem className={classes.styleListItem}>
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} defaultChecked/>
            </ListItemIcon>
            <ListItemText primary={"Shifts"} />
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} defaultChecked/>
            </ListItemIcon>
            <ListItemText primary={"Absences"} />
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} defaultChecked/>
            </ListItemIcon>
            <ListItemText primary={"Events"} />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography className={classes.styleListHeading} variant={"body1"}>
          {"LOCATION & TEAM"}
        </Typography>
        <Box className={classes.styleSubHeadingContainer}>
          <Typography className={classes.styleSubHeading} variant={"body2"}>
            {"Lilli's Cafe"}
          </Typography>
          <ExpandLessIcon />
        </Box>
        <List disablePadding>
          <ListItem className={classes.styleListItem}>
            <ListItemIcon>
              <Checkbox color={"primary"} defaultChecked/>
            </ListItemIcon>
            <ListItemText primary={"Bar"} />
          </ListItem>
          <ListItem className={classes.styleListItem}>
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} defaultChecked/>
            </ListItemIcon>
            <ListItemText primary={"Kitchen"} />
          </ListItem>
        </List>
        <Box className={classes.styleSubHeadingContainer}>
          <Typography className={classes.styleSubHeading} variant={"body2"}>
            {"John's Cafe"}
          </Typography>
          <ExpandLessIcon />
        </Box>
        <List disablePadding>
          <ListItem
            className={`${classes.styleListItem} ${classes.styleLastListItems}`}
          >
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} />
            </ListItemIcon>
            <ListItemText primary={"Bar"} />
          </ListItem>
          <ListItem
            className={`${classes.styleListItem} ${classes.styleLastListItems}`}
          >
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} />
            </ListItemIcon>
            <ListItemText primary={"Reception"} />
          </ListItem>
          <ListItem
            className={`${classes.styleListItem} ${classes.styleLastListItems}`}
          >
            <ListItemIcon>
              <Checkbox color={"primary"} className={classes.styleCheckBox} />
            </ListItemIcon>
            <ListItemText primary={"Kitchen"} />
          </ListItem>
        </List>
        <Box className={classes.styleSubHeadingContainer}>
          <Typography className={classes.styleSubHeading} variant={"body2"}>
            {"Nadia's Cafe"}
          </Typography>
          <ExpandMoreIcon />
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;