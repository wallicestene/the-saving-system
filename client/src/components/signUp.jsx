import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";

const signUp = () => {
  const [{ user }, dispatch] = useAuthContext();

  console.log(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    fetch("http://localhost:5000/api/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //  save the user to local storage
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));
         //dispatch user data to context
         dispatch({
          type:"LOGIN",
          user: data,
         })
      })
      .catch((error) => {
        console.error(error);
      });
setEmail("")
setPassword("")
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
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
