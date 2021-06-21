import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function EntryForm (props) {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (props.formType === "Edit") setValues(props.data[props.index]);
  }, [props.formType]);

  let isFormValid = true;

  const handleFname = (e) => setValues({ ...values, fname: e.target.value });
  const handleLname = (e) => setValues({ ...values, lname: e.target.value });
  const handleEmail = (e) => setValues({ ...values, email: e.target.value });
  const handlePhone = (e) => setValues({ ...values, phone: e.target.value });

  const handleSubmit = () => {
    if (isFormValid) {
      let customData = props.data;
      customData.unshift({
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        phone: values.phone,
      });
      props.setData([...props.data], customData);
      props.setFormModalState();
      props.setFormType();
      setValues({ ...values, fname: "", lname: "", email: "", phone: "" });
    }
  };

  const handleEdit = () => {
    
    if (isFormValid) {
      props.handleOnEdit(values, props.index);
      props.setFormModalState();
      props.setFormType();
      setValues({ ...values, fname: "", lname: "", email: "", phone: "" });
    }
  };

  const handleCancel = () => {
    setValues({ ...values, fname: "", lname: "", email: "", phone: "" });

    props.setFormModalState();
    props.setFormType();
  };

  return (
    <Modal
      className={"formModal"}
      isOpen={props.formModalState}
      onRequestClose={() => props.setFormModalState()}
    >
      <div className={"formContainer"}>
        <h2 className={"formHeading"}>{`${props.formType} Details`}</h2>
        <form>
          <label htmlFor={"fname"} className={"inputlabel"}>{"First Name * : "}</label>
          {props.formType === "Add" && (
            <input
              type={"text"}
              id={"fname"}
              name={"fname"}
              className={"inputfield"}
              placeholder={"Enter first name"}
              onChange={handleFname}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"text"}
              id={"fname"}
              name={"fname"}
              className={"inputfield"}
              placeholder={"Enter first name"}
              value={values.fname}
              onChange={handleFname}
            />
          )}
  
          <label htmlFor={"lname"} className={"inputlabel"}>{"Last Name *"}</label>
          {props.formType === "Add" && (
            <input
              type={"text"}
              id={"lname"}
              name={"lname"}
              className={"inputfield"}
              placeholder={"Enter last name"}
              onChange={handleLname}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"text"}
              id={"lname"}
              name={"lname"}
              className={"inputfield"}
              placeholder={"Enter last name"}
              value={values.lname}
              onChange={handleLname}
            />
          )}
          
          <label htmlFor={"email"} className={"inputlabel"}>{"Email *"}</label>
          {props.formType === "Add" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              className={"inputfield2"}
              placeholder={"Enter email id"}
              onChange={handleEmail}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              className={"inputfield2"}
              placeholder={"Enter email id"}
              value={values.email}
              onChange={handleEmail}
            />
          )}

          <label htmlFor={"number"} className={"inputlabel"}>{"Phone No. *"}</label>
          {props.formType === "Add" && (
            <input
              type={"number"}
              id={"phone"}
              name={"phone"}
              className={"inputfield"}
              placeholder={"Enter Phone number"}
              onChange={handlePhone}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"number"}
              id={"phone"}
              name={"phone"}
              className={"inputfield"}
              placeholder={"Enter Phone number"}
              value={values.phone}
              onChange={handlePhone}
            />
          )}

          {props.formType === "Add" && (
            <button
              type={"button"}
              onClick={handleSubmit}
              className={"submitButton"}
            >
              {"SUBMIT"}
            </button>
          )}
          {props.formType === "Edit" && (
            <button
              type={"button"}
              onClick={handleEdit}
              className={"submitButton"}
            >
              {"Edit"}
            </button>
          )}
          <button
            type={"button"}
            onClick={handleCancel}
            className={"cancelButton"}
          >
            {"CANCEL"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EntryForm;