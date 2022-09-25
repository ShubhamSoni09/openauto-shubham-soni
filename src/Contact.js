import React, { useState, useEffect } from "react";
import { db } from "./firebase/firebase.js";

const Contact = () => {
  var regMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      seterrorMessage("Name should be greater than 3 chars");

      setTimeout(() => {
        seterrorMessage("");
        document.getElementById("input-name").style.border = "red";
      }, 6000);
    }

    if (!email.match(regMail)) {
      seterrorMessage("email is not valid");

      setTimeout(() => {
        seterrorMessage("");
        document.getElementById("input-email").style.border = "red";
      }, 6000);
    }

    db.collection("openauto-shubham")
      .add({
        name: name,
        email: email,
      })
      .then(() => {
      
        alert("Your query has been successfully submitted!");
      })
      .catch((error) => {
        alert(error.message);
      
      });

    setName("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="input-name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        id="input-email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>{errorMessage}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
