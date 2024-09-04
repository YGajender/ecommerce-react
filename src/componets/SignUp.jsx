import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//State updates in react happens in batches, i.e., state updatation is asynchronous

function SignUp() {
  const key = "userdata";
  const navigate = useNavigate();

  const [savedUsers, setSavedUsers] = useState(
    localStorage.getItem("userdata") !== null
      ? JSON.parse(localStorage.getItem("userdata"))
      : []
  );

  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    phoneNumberError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const usernameExp = /^[a-zA-Z0-9]{4,20}$/;
  const phoneExp = /^[0-9]{10}$/;
  const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
  const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.username.match(usernameExp)) {
      newErrors.usernameError = "Only alphabets & numbers allowed. Range 4-20";
      valid = false;
    } else {
      newErrors.usernameError = "";
    }

    if (!formData.phoneNumber.match(phoneExp)) {
      newErrors.phoneNumberError = "Only numbers allowed. Max 10 chars";
      valid = false;
    } else {
      newErrors.phoneNumberError = "";
    }

    if (!formData.email.match(emailExp)) {
      newErrors.emailError = "Enter a valid email address";
      valid = false;
    } else {
      newErrors.emailError = "";
    }

    if (!formData.password.match(passExp)) {
      newErrors.passwordError =
        "Range 6-20. Allowed sp. chars [!@#$%^&*()_-+/><]";
      valid = false;
    } else {
      newErrors.passwordError = "";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPasswordError = "Confirm Password must match password";
      valid = false;
    } else {
      newErrors.confirmPasswordError = "";
    }

    setErrors(newErrors);
    return valid;
  };
  //submit handle

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const userdata = {
        username: formData.username,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      setSavedUsers([...savedUsers, userdata]);

      setSubmittedData(userdata);

      // const userdataString = JSON.stringify(userdata);
      // localStorage.setItem(key, userdataString);
    }
  };

  useEffect(() => {
    console.log("useEffect running");
    if (savedUsers.length > 0 && submittedData !== null) {
      localStorage.setItem(key, JSON.stringify(savedUsers));
      navigate("/");
    }
  }, [savedUsers]);

  // Login Handle
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 signupbox">
          <div className="signupbox__outer">
            <h1 className="text-center fw-semibold">Sign Up</h1>
            <div className="signupForm mt-5">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="username fs-13 usercommonclass">
                    <div className="d-flex">
                      <span className="me-2">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="inp-common"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                      />
                    </div>
                    <div className="error">{errors.usernameError}</div>
                  </div>
                  <div className="userphone fs-13 usercommonclass">
                    <div className="d-flex">
                      <span className="me-2">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <input
                        type="text"
                        className="inp-common"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="error">{errors.phoneNumberError}</div>
                  </div>
                  <div className="useremail fs-13 usercommonclass">
                    <div className="d-flex">
                      <span className="me-2">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="inp-common"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Id"
                      />
                    </div>
                    <div className="error">{errors.emailError}</div>
                  </div>
                  <div className="userpassword fs-13 usercommonclass">
                    <div className="d-flex">
                      <span className="me-2">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="inp-common"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                    <div className="error">{errors.passwordError}</div>
                  </div>
                  <div className="userconfirmpassword fs-13 usercommonclass">
                    <div className="d-flex">
                      <span className="me-2">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="inp-common"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="error">{errors.confirmPasswordError}</div>
                  </div>
                  <button className="signUpBtn" type="submit">
                    Sign up
                  </button>
                </div>
                <div className="signuptologin">
                  <p>
                    <button onClick={handleLoginClick}>Login</button>
                  </p>
                </div>
              </form>
              {submittedData && (
                <div className="submitted-data mt-5">
                  <h2>User Data</h2>
                  <p>
                    <strong>Username:</strong> {submittedData.username}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {submittedData.phoneNumber}
                  </p>
                  <p>
                    <strong>Email:</strong> {submittedData.email}
                  </p>
                  <p>
                    <strong>Password:</strong> {submittedData.confirmPassword}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
