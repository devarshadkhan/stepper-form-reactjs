import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/StepperContext";

export const Step1 = ({ navigation }) => {
  const { next } = navigation;
  const [state, dispatch] = useContext(GlobalContext);
  const [email, setEmail] = useState(state.email || "");
  const [password, setPassword] = useState(state.password || "");

  const submitForm = () => {
    if (email === "" || password === "") return;
    // save data to global state
    dispatch({
      type: "SAVE_LOGIN_INFO",
      email: email,
      password: password
    });
    next();
  };

  return (
    <>
      <h3>Step 1</h3>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            className="form-control"
            placeholder="Enter email address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            className="form-control"
            placeholder="Enter pasword"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
            type="password"
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          NEXT
        </button>
      </form>
    </>
  );
};
