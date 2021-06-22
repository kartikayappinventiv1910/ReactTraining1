import React, { useEffect, useState } from "react";
import "./index.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import EntryForm from "./form";
import DeleteModal from "./delete";


function Assignment8() {
  // const [userData, setUserData] = useState(allUserData);
  const [Data, setData] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [searchedData, setSearchedData] = useState([]);
  const [formType, setFormType] = useState("");

  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [doSearch, setDoSearch] = useState(false);
  const [isLoader, setIsLoader] = useState(false);


  const handleSearch = (e) => {
    if (e.target.value === "") setDoSearch(false);
    else {
      setIsLoader(true);
      setDoSearch(true);
      let searchValue = e.target.value;
      setTimeout(() => {
        let customData = Data.filter((curr) => {
          return (
            curr.fname.indexOf(searchValue) > -1
          );
        });
        setSearchedData(customData);
        setIsLoader(false);
      }, 1500);
    }
  };


  const handleOnEdit = (data, ind) => {
    Data[ind] = data;
    setData(Data);
  };

  const handleOnDelete = (ind) => {
    let data = Data.filter((curr, index) => {
      return ind !== index;
    });
    setData(data);
  };


  return(
      <>
       <div className="mainContainer">
      <div className="headerContainer">
        <h1 className={"heading1"}>{"User Registration"}</h1>
        <button
          className={"addButton"}
          onClick={() => {
            setFormModalOpen(true);
            setFormType("Add");
          }}
        >
          {"ADD USER"}
        </button>
      </div>

      <EntryForm
        index={arrayIndex}
        formType={formType}
        setFormType={() => {
          setFormType("");
        }}
        formModalState={isFormModalOpen}
        setFormModalState={() => {
          setFormModalOpen(false);
        }}
        data={Data}
        setData={(arr) => {
          setData(arr);
        }}
        handleOnEdit={handleOnEdit}
      />

      <input
        className={"searchinput"}
        type={"text"}
        id={"search"}
        name={"search"}
        placeholder={"Search User by Entering First Name"}
        onKeyUp={handleSearch}
      />
      <h2 className={"tableHead"}><u>{"Registered User"}</u></h2>
      <div className={"tableContainer"}>
        {isLoader ? (
          <div className={"Loader"}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <table>
            <thead>
                <tr>
                  <th className={"tableHeading"}>{"First Name"}</th>
                  <th className={"tableHeading"}>{"Last Name"}</th>
                  <th className={"tableHeading"}>{"Email Id"}</th>
                  <th className={"tableHeading"}>{"Phone Number"}</th>
                  <th className={"tableHeading"}>{"Change Info"}</th>
                  <th className={"tableHeading"}>{"DELETE"}</th>
                </tr>
            </thead>

            <tbody>
              {doSearch ? (
                searchedData.length > 0 ? (
                  searchedData?.map((curr, ind) => {
                    return (
                      <tr key={ind}>
                        <td className={"tableData"}>{curr.fname}</td>
                        <td className={"tableData"}>{curr.lname}</td>
                        <td className={"tableData"}>{curr.email}</td>
                        <td className={"tableData"}>{curr.phone}</td>
                        <td className={"tableData"}>
                          <button
                            onClick={() => {
                              setFormModalOpen(true);
                              setFormType("Edit");
                              setArrayIndex(ind);
                            }}
                            className={"editButton"}
                            aria-hidden="true"
                          >EDIT</button></td>
                          <td className={"tableData"}>
                          <button
                            onClick={() => {
                              setDeleteModalOpen(true);
                              setArrayIndex(ind);
                            }}
                            className={"deleteButton"}
                          >DELETE</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className={"noSuchData"}>{"No Such Data Exist"}</td>
                  </tr>
                )
              ) : (
                Data?.map((curr, ind) => {
                  return (
                    <tr key={ind}>
                      <td className={"tableData"}>{curr.fname}</td>
                      <td className={"tableData"}>{curr.lname}</td>
                      <td className={"tableData"}>{curr.email}</td>
                      <td className={"tableData"}>{curr.phone}</td>
                      <td className={"tableData"}>
                        <button
                          onClick={() => {
                            setFormModalOpen(true);
                            setFormType("Edit");
                            setArrayIndex(ind);
                          }}
                          className="editButton"
                        >EDIT</button></td>
                        <td className={"tableData"}>
                        <button
                          onClick={() => {
                            setDeleteModalOpen(true);
                            setArrayIndex(ind);
                          }}
                          className={"deleteButton"}
                        >DELETE</button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>
      <DeleteModal
        index={arrayIndex}
        handleOnDelete={handleOnDelete}
        modalState={isDeleteModalOpen}
        setModalState={() => {
          setDeleteModalOpen(false);
        }}
      />
    </div>
      </>
  );
}

export default Assignment8;