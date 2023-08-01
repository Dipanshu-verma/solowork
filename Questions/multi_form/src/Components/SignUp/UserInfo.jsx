import React from "react";

const UserInfo = ({data}) => {
  return <div>
    <h1>You are ragistered successfully!</h1>
    <p>Email:{data.email}</p>
    <p>Password:{data.Password}</p>
    <p>Confirmed Password:{data.ConfirmPassword}</p>
    <p>Education:{data.education}</p>
    <p>Passing Year:{data.passingyear}</p>
    <p>Birth Date:{data.birthdata}</p>
    <p>First Name:{data.FirstName}</p>
    <p>Last Name:{data.lastName}</p>
    <p>Phone:{data.phonenumber}</p>
    <p>Father Name:{data.fathername}</p>
    <p>Mother Name:{data.mothername}</p>
    <p>Address:{data.address}</p>
  </div>;
};

export default UserInfo;
