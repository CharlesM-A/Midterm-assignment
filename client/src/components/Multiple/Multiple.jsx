import React, { useState } from "react";
import "./multiple.css";


export default function Multiple() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    EmailID: "",
    Mobile_Number: "",
    address: "", 
  });

  const handleChange = (event) => {
    const { name,lname,mobileNum , value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormData((prevFormData) => ({ ...prevFormData, [lname]: value }));
    setFormData((prevFormData) => ({ ...prevFormData, [mobileNum]: value }));
    setFormData((prevFormData) => ({ ...prevFormData, [email]: value }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First Name: ${formData.name}, Last Name: ${formData.lname}, EmailID: ${formData.email}, Mobile_Number ${formData.mobileNum}, Address ${formData.message} `
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
       First Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="Last Name">
        Last Name:
      </label>
      <input
         type="text"
         id="lname"
         className="multiple__text"
         name="lname"
         value={formData.lname}
         onChange={handleChange}
       />

      <label className="multiple__text" htmlFor="EmailID">
        EmailID:
      </label>
      <input
        type="email"
        id="email"
        className="multiple__twxt"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
       <label className="multiple__text" htmlFor="Mobile Number">
       Mobile Number:
      </label>
      <input
        type="text"
        id="mobileNum"
        className="multiple__text"
        name="mobileNum"
        value={formData.mobileNum}
        onChange={handleChange}
      />
      <label className="multiple__text" htmlFor="message">
        Address:
      </label>
      <textarea
        id="message"
        className="multiple__textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button className="multiple__button" type="submit">
        Submit
      </button>
      <button className="multiple__button" type="Reset">
        Reset
      </button>
    </form>
  );
}
