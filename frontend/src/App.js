import React, { useState } from "react";
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const registerUser = async () => {

    try {

      await axios.post("http://localhost:5001/register", {
        name: name,
        email: email,
        phone: phone
      });

      alert("User Registered Successfully");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "50px" }}>

      <h1> Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>

    </div>
  );
}

export default App;