/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container shadow__btn">
      <h2>Login Page</h2>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <a href="">Forgot Passworrd</a>
      </div>
      <div>
        Don't have account : <a href="">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;
