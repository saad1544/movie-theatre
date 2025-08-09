import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/api/users/signup", { email, password });
    alert("Signup successful");
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <input className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="form-control mt-2" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="btn btn-primary mt-2" onClick={handleSignup}>Signup</button>
    </div>
  );
}
