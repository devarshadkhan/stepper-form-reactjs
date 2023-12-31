import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/StepperContext";

export const Step2 = ({ navigation }) => {
  const { previous ,  next } = navigation;
  const [state, dispatch] = useContext(GlobalContext);
  const [firstName, setFirstName] = useState(state.firstName || "");
  const [surname, setSurname] = useState(state.surname || "");
  const [submited, setSubmited] = useState(false);

  const submitForm = (e) => {
    if (surname === "" || firstName === "") return;
    dispatch({
      type: "SAVE_PERSONAL_INFO",
      firstName: firstName,
      surname: surname
    });
    setSubmited(true);
    e.preventDefault();
    next();
  };

  return (
    <>
      <h3>Step 2</h3>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInput1">First name</label>
          <input
            className="form-control"
            placeholder="Enter First name"
            onChange={(e) => setFirstName(e.target.value)}
            defaultValue={firstName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput2">Surname</label>
          <input
            className="form-control"
            placeholder="Enter Surname"
            onChange={(e) => setSurname(e.target.value)}
            defaultValue={surname}
            required
          />
        </div>
        {/* {submited && (
          <div className="alert alert-success" role="alert">
            Thank you for your registration{" "}
            <strong>
              {firstName} {surname}
            </strong>
            .<br /> Please verify your email at <strong>{state.email}</strong>!
          </div>
        )} */}
        <button className="btn btn-secondary" onClick={previous}>
          BACK
        </button>
        <button
          className="btn btn-primary ml-2"
          type="submit"
        //   onClick={submitForm}
        >
          Next JS
        </button>
      </form>
    </>
  );
};
