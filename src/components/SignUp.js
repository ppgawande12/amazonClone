import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

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

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSignUp = async () => {
    const isValid = validateForm();

    if (isValid) {
      try {
        await axios.post(`${API_BASE_URL}/signup`, { name, email, password });
        console.log("User created successfully");
        navigate("/login");
      } catch (error) {
        console.error("Error creating user:", error.response.data.error);
      }
    }
  };

  return (
    <div className="signup">
      <form className="container">
        <h1 className="text-center">Sign Up</h1>

        <div className="input-container">
          <input type="text" name="name" value={name} onChange={handleChange} required />
          <label>Full Name</label>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

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

        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="button" className="btn" onClick={handleSignUp}>
          Sign Up
        </button>
        <hr />
        <p>
          Have Account{" "}
          <Link to="/login" className="link">
            Click Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
