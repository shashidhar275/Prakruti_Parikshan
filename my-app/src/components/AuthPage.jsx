import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we simulate authentication by checking if the email and password are provided
    if (formData.email && formData.password) {
      console.log("Authenticated successfully", formData);
      navigate("/dashboard"); // Navigate to dashboard if authentication is successful
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-form">
      <div className="auth-logo">
        <img src="./Images/PPlogo.jpg" alt="Logo" className="logo-img" />
      </div>
        <h3>{isLogin ? "Login" : "Signup"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p
          className="toggle-auth-mode"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
