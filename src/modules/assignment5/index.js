import react from "react";

import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Button,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BallotIcon from '@material-ui/icons/Ballot';
import BusinessIcon from '@material-ui/icons/Business';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = makeStyles({
  mainContainer: {
    position: "relative",
  },
  body: {
    backgroundColor: "AliceBlue",
  },
  menubar: {
    marginTop: "-10px",
    position: "fixed",
    backgroundColor:"blue"
  },
  menuItem: {
    backgroundColor: "blue",
    padding: "17px",
    color: "white",
    width: "80px",
    marginTop: "-10px",
  },
  menuItem2: {
    backgroundColor: "black",
    padding: "24px",
    color: "white",
    width: "80px",
    marginTop: "-10px",
  },
  icon: {
    color: "white",
  },
  icon2: {
    color: "white",
  },
  header: {
    position: "absolute",
    backgroundColor: "white",
    height: "70px",
    width: "1347px",
    margin: "-10px 80px",
    boxShadow: "0 0 2px grey",
  },
  switch:{
    color:"green",
    marginTop:"10px"
  },

  button: {
    backgroundColor: "green",
    fontSize: "20px",
    fontWeight: "bold",
    left: "860px",
    margin: "0px 20px",
    cursor: "pointer",
  },
  button2: {
    backgroundColor: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    left: "880px",
    cursor: "pointer",
  },
  search: {
    width: "600px",
    height: "300px",
    position: "absolute",
    margin: "110px 110px",
    padding: "30px",
    boxShadow: "0 0 2px grey",
  },
  button3: {
    backgroundColor: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0px 10px",
    padding: "10px 110px",
    cursor: "pointer",
  },
  button4: {
    backgroundColor: "green",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0px 5px",
    padding: "10px 100px",
    cursor: "pointer",
  },
  amountinput: {
    margin: "20px 10px",
    width: "280px",
  },
  signupfree: {
    width: "500px",
    height: "300px",
    padding: "30px",
    boxShadow: "0 0 2px grey",
    position: "absolute",
    margin: "110px 810px",
  },
  button5: {
    backgroundColor: "green",
    fontSize: "17px",
    fontWeight: "600",
    margin: "30px 150px",
    cursor: "pointer",
  },
  tableheading: {
    position: "absolute",
    width: "700px",
    margin: "490px -20px",
    color: "grey",
  },
  tablecontainer: {
    position: "absolute",
    margin: "570px 110px",
    width: "1260px",
    height: "550px",
    boxShadow: "0 0 2px grey",
  },
  tablehead: {
    fontSize: "22px",
    fontWeight: "bold",
    width: "250px",
  },
  tablehead2: {
    fontSize: "20px",
    fontWeight: "bold",
    width: "350px",
  },
  sellercol: {
    fontSize: "17px",
    color: "blue",
  },
  paymentcol: {
    fontSize: "20px",
  },
  pricecol: {
    fontSize: "22px",
    color: "green",
    fontWeight: "bold",
  },
  limitcol: {
    fontSize: "20px",
  },
  buybutton: {
    backgroundColor: "orange",
    color:"white",
    padding: "7px 25px",
    marginLeft: "-60px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  showbutton: {
    width: "200px",
    fontWeight: "bold",
    fontSize: "20px",
    marginLeft: "-150px",
  },
  tablebottom: {
    position: "absolute",
    margin: "2340px 110px",
  },
  youcanbe: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  postadbutton: {
    color: "green",
    fontSize: "20px",
    border: "1px solid green",
  },
  addicon: {
    fontSize: "30px",
    color: "green",
  },
  buymonero: {
    color: "green",
    fontSize: "24px",
  },
  showingad: {
    position: "absolute",
    margin: "2480px 500px",
  },
  showingcontent: {
    fontSize: "22px",
    width: "500px",
  },
  changebutton: {
    color: "blue",
    fontSize: "22px",
  },
  horizontal: {
    width: "1200px",
    position: "absolute",
    margin: "2130px 130px",
  },
  bottombody: {
    position: "absolute",
    margin: "2570px 300px",
  },
  bottomhead: {
    fontWeight: "bold",
    padding: "15px 0px",
  },
  bottomcontent: {
    fontSize: "18px",
  },
  horizontal: {
    width: "1200px",
    position: "absolute",
    margin: "2535px 130px",
  },
  accounticon: {
    color: "blue",
  },
  tableheading2: {
    position: "absolute",
    width: "700px",
    margin: "1160px -20px",
    color: "black",
  },
  tablecontainer2: {
    position: "absolute",
    margin: "1240px 110px",
    width: "1260px",
    height: "550px",
    boxShadow: "0 0 2px grey",
  },
  tableheading3: {
    position: "absolute",
    width: "700px",
    margin: "1820px 40px",
    color: "black",
  },
  tablecontainer3: {
    position: "absolute",
    margin: "1880px 110px",
    width: "1260px",
    height: "422px",
    boxShadow: "0 0 2px grey",
  },
  distancecol: {
    fontSize: "20px",
  },
  inputSelect: {
    width: "280px",
    margin: "20px 10px",
    color: "dark-greyTwo-color",
    "& .MuiSvgIcon-root ": {
      borderLeft: "1px solid dark-greyTwo-color",
      opacity: 0.6,
    },
    "& .MuiFormLabel-root": {
      color: "black",
    },
  },
  searchbutton: {
    backgroundColor: "blue",
    padding: "10px 240px",
    fontSize: "17px",
    fontWeight: "600",
    margin: "10px 15px",
    cursor: "pointer",
  },
  steppercontent:{
      margin:"3100px 270px",
      position:"absolute",
      boxShadow:"0 0 2px grey",
      width:"800px",
      height:"300px",
      padding:"30px"
  }
});

export default function material() {
  const classes = styles();
  return (
    <div className={classes.body}>
      <div className={classes.menubar}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button className={classes.menuItem2}>
            <ListItemIcon>
              <HomeIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <DraftsIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <BallotIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <BusinessIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <CameraRollIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <DirectionsCarIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <InboxIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <EmojiEventsIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <AccountBalanceWalletIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <AssignmentIndIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <InboxIcon fontSize={"large"} className={classes.icon} />
            </ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon></ListItemIcon>
          </ListItem>
        </List>
      </div>
      <div className={classes.header}>
      <FormControlLabel
        value="bottom"
        control={
    <Switch
    checked={true}
    className={classes.switch} />
        }
        label="On" className={classes.label}
        labelPlacement="bottom"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={
            <PersonAddIcon fontSize={"large"} className={classes.icon} />
          }
        >
          SIGN UP FREE
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button2}
          startIcon={
            <FingerprintIcon fontSize={"large"} className={classes.icon} />
          }
        >
          LOGIN
        </Button>
      </div>
      <div className={classes.headerbottom}>
        <div className={classes.search}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button3}
            startIcon={
              <ShoppingCartIcon fontSize={"large"} className={classes.icon} />
            }
          >
            BUY
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button4}
            startIcon={
              <ShoppingCartIcon fontSize={"large"} className={classes.icon2} />
            }
          >
            sell
          </Button>
          {/* <TextField label="Amount" type="number" className={classes.inputtext}/> */}
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            className={classes.amountinput}
          />
          <FormControl variant="outlined" className={classes.inputSelect}>
            <InputLabel id="demo-simple-select-outlined-label">INR</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="INR"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.inputSelect}>
            <InputLabel id="demo-simple-select-outlined-label">IND</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="IND"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>IND</MenuItem>
              <MenuItem value={20}>USA</MenuItem>
              <MenuItem value={30}>UK</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.inputSelect}>
            <InputLabel id="demo-simple-select-outlined-label">
              All Online Offers
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="IND"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>IND</MenuItem>
              <MenuItem value={20}>USA</MenuItem>
              <MenuItem value={30}>UK</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            className={classes.searchbutton}
            startIcon={
              <SearchIcon fontSize={"large"} className={classes.icon} />
            }
          >
            SEARCH
          </Button>
        </div>
        <div className={classes.signupfree}>
          <Typography variant="h3" align="center">
            Buy Monero.
          </Typography>
          <Typography variant="h3" align="center">
            Sell Monero.
          </Typography>
          <Typography variant="h3" align="center">
            Cash or online.
          </Typography>
          <Typography variant="h3" align="center">
            Anywhere.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button5}
            startIcon={
              <PersonAddIcon fontSize={"large"} className={classes.icon} />
            }
          >
            SIGN UP FREE
          </Button>
        </div>
        <div className={classes.tableheading}>
          <Typography variant="h3" align="right">
            Buy Monero online in India
          </Typography>
        </div>
        <div className={classes.tablecontainer}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tablehead}>Seller</TableCell>
                  <TableCell className={classes.tablehead2}>
                    Payment Methods
                  </TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    Other online payment
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    8500.00-50000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    1000.00-25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>appukuttam(5764;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21766.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    Up to 25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.tableheading2}>
          <Typography variant="h3" align="right">
            Sell Monero online in India
          </Typography>
        </div>
        <div className={classes.tablecontainer2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell className={classes.tablehead}>Buyer</TableCell>
                  <TableCell className={classes.tablehead2}>
                    Payment Methods
                  </TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    Other online payment
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    8500.00-50000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    1000.00-25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover> 
                  <TableCell className={classes.sellercol}>
                    <u>appukuttam(5764;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <AccountBalanceIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21766.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    Up to 25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.tableheading3}>
          <Typography variant="h3" align="right">
            Sell Monero For Cash in India
          </Typography>
        </div>
        <div className={classes.tablecontainer3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell className={classes.tablehead}>Buyer</TableCell>
                  <TableCell className={classes.tablehead}>Distance</TableCell>
                  <TableCell className={classes.tablehead2}>Location</TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>500.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    DELHI
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    250.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>450.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    MUMBAI
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>650.5KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    LUCKNOW
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    800.00-50000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.distancecol}>
                    <u>530.0KM</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    <LocationOnIcon
                      fontSize={"small"}
                      className={classes.accounticon}
                    />
                    JAIPUR
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    900.00-25000.00INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className={classes.buybutton}
                    >
                      SELL
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.tablebottom}>
          <Typography className={classes.youcanbe}>
            You can be the first one to{" "}
            <Button
              variant="outlined"
              color="primary"
              className={classes.postadbutton}
              startIcon={
                <AddIcon fontSize={"large"} className={classes.addicon} />
              }
            >
              POST AN AD
            </Button>
            in the following categories.
          </Typography>
          <Typography className={classes.buymonero}>
            <u>
              <AddIcon fontSize={"large"} className={classes.addicon} />
              Buy Monero with cash in India
            </u>
          </Typography>
        </div>
        <div className={classes.showingad}>
          <Typography className={classes.showingcontent}>
            <VpnLockIcon fontSize={"large"} />
            Show advertisements in India
            <Button
              variant="container"
              color="primary"
              className={classes.changebutton}
            >
              CHANGE
            </Button>
          </Typography>
        </div>
        <div className={classes.horizontal}>
          <hr></hr>
        </div>
        <div className={classes.bottombody}>
          <Typography variant="h5" className={classes.bottomhead}>
            Protect your right to privacy - buy Monero.
          </Typography>
          <Typography className={classes.bottomcontent}>
            If you are concerned about the invasion of privacy - the best
            cryptocurrency to invest in is XMR. Monero is an untraceable coin
            developed with privacy by design in mind.
          </Typography>
          <Typography className={classes.bottomcontent}>
            Where to buy Monero? LocalMonero is the biggest, most trusted and
            well-established P2P Monero exchange in the XMR community. We have
            no KYC checks - you can simply buy Monero anonymously without ID
            verification with PayPal, credit card, gift card, cash by mail or
            convert bitcoin to Monero - our platform supports any payment
            method.
          </Typography>
          <Typography variant="h5" className={classes.bottomhead}>
            Sell Monero to people worldwide or locally - support the community
            and make money with cryptocurrency.
          </Typography>
          <Typography className={classes.bottomcontent}>
            LocalMonero is the best place to sell XMR - whether it's your mining
            rewards, Monero price arbitrage, or you simply see the value in
            servicing the community. The escrow system and our secure Monero
            wallet provide you with a robust XMR trading experience - so you can
            convert XMR to USD, EUR, AUD, GBP or any other local currency with
            peace of mind.
          </Typography>
        </div>
        <div className={classes.horizontal2}>
          <hr></hr>
        </div>
        <div className={classes.steppercontent}>
            <Typography variant="h4"><AssignmentIcon fontSize={"large"}/> Latest News</Typography>
            <Typography>If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page.</Typography>
        </div>
      </div>
    </div>
  );
}
