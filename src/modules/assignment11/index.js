import { useDispatch, useSelector } from "react-redux";
import { incrementNumber, decrementNumber, getUserData } from "./action";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles({
    body: {
        backgroundColor: "AliceBlue",
      },
      header:{
          margin:"50px 550px"
      },
      counterName:{
          fontSize:"35px",
          fontWeight:"bolder",
          marginBottom:"20px"
      },
      buttons:{
          cursor:"pointer",
          backgroundColor:"green",
          fontSize:"20px",
          color:"white",
          fontWeight:"bolder",
          padding:"5px 10px",
          margin:"5px 20px 0px -70px",
          outline:"none"
      },
      buttons2:{
        cursor:"pointer",
        backgroundColor:"green",
        fontSize:"20px",
        color:"white",
        fontWeight:"bolder",
        padding:"5px 10px",
        margin:"20px 20px 0px 0px",
        outline:"none"
    },
    userTable:{
        width:"400px",
        margin:"50px 420px"
    },
    tablehead:{
    backgroundColor:"lightblue"
    },
    tableheadcell:{
        width:"100px",
        fontSize:"20px",
        fontWeight:"bold"
    },
    tablebodycell:{
        width:"100px",
    }
});

function Counter() {
  const classes = styles();
  const { counter, userData } = useSelector((state) => {
    return state.counterReducer;
  });

  const dispatch = useDispatch();
  console.log(userData);

  return (
    <>
      <div className={classes.header}>
      <div className={classes.counterName}>Counter: {counter}</div>
      <button className={classes.buttons}
        onClick={() => {
          dispatch(incrementNumber(1));
        }}
      >
        INCREMENT
      </button>
      <button className={classes.buttons2}
        onClick={() => {
          dispatch(decrementNumber(1));
        }}
      >
        DECREMENT
      </button>
      <button className={classes.buttons2}
        onClick={() => {
          dispatch(getUserData());
        }}
      >
        USER DATA
      </button>
      </div>
      <div className={classes.userTable}>
        <TableContainer>
          <Table>
            <TableHead >
              <TableRow className={classes.tablehead}>
                <TableCell className={classes.tableheadcell}>ID</TableCell>
                <TableCell className={classes.tableheadcell}>NAME</TableCell>
                <TableCell className={classes.tableheadcell}>YEAR</TableCell>
              </TableRow>
            </TableHead>

            {userData.length &&
              userData.map((user) => {
                return (
                  <div key={user.id}>
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.tableheadcell}>{user.id}</TableCell>
                        <TableCell className={classes.tablebodycell}>{user.name}</TableCell>
                        <TableCell>{user.year}</TableCell>
                      </TableRow>
                    </TableBody>
                  </div>
                );
              })}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Counter;
