import React, { useState } from "react";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sing up</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default signUp;
