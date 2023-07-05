import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>
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
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
