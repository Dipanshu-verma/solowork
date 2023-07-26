import React from "react";
import "./Form.css";
import { useState } from "react";
import ShowFormData from "./ShowFormData";
const Form = () => {
  const[show, setShow]  =  useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false,
    gender: "",
  });

  function inputValues(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function formValue(event) {
    event.preventDefault();
    setShow(true);
    console.log(data);
  }

  return (
    <div className="container">
    <h1>React Form Assignment</h1>
    <div>
      <form
        onSubmit={(event) => {
          formValue(event);
        }}
      >
      
        <div className="row">
          <div>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={(event) => inputValues(event)}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={(event) => inputValues(event)}
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              onChange={(event) => inputValues(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(event) => inputValues(event)}
            />
          </label>
        </div>
        <div className="row">
          <div>
            <label>
              Phone Number
              <input
                type="number"
                name="phNumber"
                placeholder="999999999"
                required
                onChange={(event) => inputValues(event)}
              />
            </label>
          </div>
          <div>
            <label>
              Country
              <select
                name="country"
                required
                onChange={(event) => inputValues(event)}
              >
                <option value="">Select an Option</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Russia">Russia</option>
                <option value="Brazil">Brazil</option>
                <option value="China">China</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </label>
          </div>
        </div>

        <div className="row">
          <div>
            <label>
              Birth Date
              <input
                type="date"
                name="birthDate"
                required
                onChange={(event) => inputValues(event)}
              />
            </label>
          </div>
          <div>
            <label>
              Choose Avatar
              <input
                type="file"
                name="avatar"
                required
                onChange={(event) => inputValues(event)}
              />
            </label>
          </div>
        </div>

        {/* Rest of the form code */}

        <div className="marrried">
          <h3>Select if Married</h3>
          <label>
            <input
              type="checkbox"
              name="gender"
              required
              onChange={(event) => inputValues(event)}
            />
            <p>MarriageStatus</p>   
          </label>
        </div>

        <div className="gender">
          <h3>Choose Gender...</h3>
          <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              required
              onChange={(event) => inputValues(event)}
            />
            <p>Male</p> 
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              required
              onChange={(event) => inputValues(event)}
            />
              <p> Female</p>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              required
              onChange={(event) => inputValues(event)}
            />
          <p> Other</p>    
          </label>
          </div>
        
        </div>
        <input type="submit" value="Submit" />
      </form>
      {
        show?<ShowFormData data={data} />:""
      }
      </div>
      {/* if form submitted then show ShowFormData component here */}
    </div>
  );
};

export default Form;
