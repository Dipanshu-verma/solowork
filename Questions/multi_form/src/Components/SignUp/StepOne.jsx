import React from "react";
 import "../styles.css"
const StepOne = ({ setPage, data, setdata }) => {
  function getdata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <label>
        <p>Email</p>
        <input
          type="text"
          placeholder="email"
          name="email"
          data-cy="email"
          onChange={(event) => getdata(event)}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          data-cy="password"
          
          onChange={getdata}
        />
      </label>
      <label>
        <p>Confirm Password</p>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          data-cy="confirmedPassword"
          onChange={getdata}
        />
      </label>
      <button className="nextbutton" onClick={() => setPage(2)}>Next</button>
    </div>
  );
};

export default StepOne;
