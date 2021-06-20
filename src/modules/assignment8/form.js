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
    if (props.formType === "Add") setValues(props.data[props.index]);
  }, [props.formType]);

  const [Errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    phoneError: "",
  });

  let isFormValid = true;

  let errors = {
    fnameError: "",
    lnameError: "",
    emailError: "",
    phoneError: "",
  };

  const handleFname = (e) => setValues({ ...values, fname: e.target.value });
  const handleLname = (e) => setValues({ ...values, lname: e.target.value });
  const handleEmail = (e) => setValues({ ...values, email: e.target.value });
  const handlePhone = (e) => setValues({ ...values, phone: e.target.value });

  const handleSubmit = () => {
    if (
      values.fname === "" &&
      values.lname === "" &&
      values.email === "" &&
      values.phone === ""
    ) {
      errors.fnameError = "Please enter the first name";
      errors.lnameError = "Please enter the last name";
      errors.emailError = "Please enter the email";
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.fname.trim() === "") {
      errors.fnameError = "Please enter the first name";
      isFormValid = false;
    }
    if (values.lname.trim() === "") {
      errors.lnameError = "Please enter the last name";
      isFormValid = false;
    }
    if (values.email.trim() === "") {
      errors.emailError = "Please enter the email";
      isFormValid = false;
    }
    if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      errors.emailError = "Please enter a valid email address";
      isFormValid = false;
    }
    if (values.phone === "") {
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.phone.length !== 10) {
      errors.phoneError = "Please enter 10 digit mobile number";
      isFormValid = false;
    }
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

    setErrors({
      ...Errors,
      fnameError: errors.fnameError,
      lnameError: errors.lnameError,
      emailError: errors.emailError,
      phoneError: errors.phoneError,
    });
  };

  const handleEdit = () => {
    if (
      values.fname === "" &&
      values.lname === "" &&
      values.email === "" &&
      values.phone === ""
    ) {
      errors.fnameError = "Please enter the first name";
      errors.lnameError = "Please enter the last name";
      errors.emailError = "Please enter the email";
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.fname.trim() === "") {
      errors.fnameError = "Please enter the first name";
      isFormValid = false;
    }
    if (values.lname.trim() === "") {
      errors.lnameError = "Please enter the last name";
      isFormValid = false;
    }
    if (values.email.trim() === "") {
      errors.emailError = "Please enter the email";
      isFormValid = false;
    }
    if (values.phone === "" || values.phone.length !== 10) {
      errors.phoneError = "Please enter the 10 mobile number";
      isFormValid = false;
    }
    if (isFormValid) {
      props.handleOnEdit(values, props.index);
      props.setFormModalState();
      props.setFormType();
      setValues({ ...values, fname: "", lname: "", email: "", phone: "" });
    }

    setErrors({
      ...Errors,
      fnameError: errors.fnameError,
      lnameError: errors.lnameError,
      emailError: errors.emailError,
      phoneError: errors.phoneError,
    });
  };

  const handleCancel = () => {
    setValues({ ...values, fname: "", lname: "", email: "", phone: "" });

    setErrors({
      ...Errors,
      fnameError: "",
      lnameError: "",
      emailError: "",
      phoneError: "",
    });

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
              value={values.fname}
              onChange={handleFname}
            />
          )}
          <div className={"error"}>
            {Errors.fnameError !== "" ? Errors.fnameError : ""}
          </div>
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
              value={values.lname}
              onChange={handleLname}
            />
          )}
          <div className={"error"}>
            {Errors.lnameError !== "" ? Errors.lnameError : ""}
          </div>
          <label htmlFor={"email"} className={"inputlabel"}>{"Email *"}</label>
          {props.formType === "Add" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              className={"inputfield"}
              placeholder={"Enter email id"}
              onChange={handleEmail}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              className={"inputfield"}
              value={values.email}
              onChange={handleEmail}
            />
          )}
          <div className={"error"}>
            {Errors.emailError !== "" ? Errors.emailError : ""}
          </div>
          <label htmlFor={"number"} className={"inputlabel"}>{"Phone Number *"}</label>
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
              value={values.phone}
              onChange={handlePhone}
            />
          )}
          <div className={"error"}>
            {Errors.phoneError !== "" ? Errors.phoneError : ""}
          </div>
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