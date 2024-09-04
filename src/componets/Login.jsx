import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const usernameExp = /^[a-zA-Z0-9]{4,20}$/;
const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!(username.match(emailExp) || username.match(usernameExp))) {
      errors.username = "Enter a valid username or email.";
    }
    if (!password.match(passExp)) {
      errors.password =
        "Password must be between 6 and 20 characters long and may include special characters.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = "userdata";
    const userdataString = localStorage.getItem(key);
    const userdata = userdataString ? JSON.parse(userdataString) : [];

    if (validate()) {
      const user = userdata.find(
        (user) => user.username === username || user.email === username
      );
      const loginData = { username, password };
      localStorage.setItem("loginData", JSON.stringify(loginData));
      console.log("Login data saved:", JSON.stringify(loginData));
      alert("Login successful!");
      if (username == user.username && password == user.password) {
        alert("WELCOME");
        navigate("/Home");
      } else {
        alert("Invalid User");
      }
    }
  };
  // signup handel
  const handleSignUpClick = () => {
    navigate("/SignUp");
  };

  return (
    <div className="loginMain">
      <div className="login-container">
        <h2 className="login-heading">Login Page</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label className="login-label" htmlFor="username">
              Username:
            </label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>
          <div className="login-field">
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <div className="signuptologin">
            <p>
              <button onClick={handleSignUpClick}>SignUp</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
