import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_BASE_URL = "http://localhost:5000";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        console.log("Login successful. Token:", response.data.token);
        navigate("/");
      } catch (error) {
        console.error("Error logging in:", error.response.data.error);
      }
    }
  };

  return (
    <div className="signup">
      <form className="container">
        <h1 className="text-center">Login</h1>

        <div className="input-container">
          <input type="email" name="email" value={email} onChange={handleChange} required />
          <label>Email</label>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="input-container">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="button" className="btn" onClick={handleLogin}>
          Login
        </button>
        <hr />
        <p>
          Don't Have Account{" "}
          <Link to="/signup" className="link">
            Click Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
