import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage({ onLogin }) {
  const [volunteerType, setVolunteerType] = useState("STUDENT");
  const [formData, setFormData] = useState({
    mobileNumber: "",
    collegeCode: "",
  });
  const navigate = useNavigate(); // To navigate to Dashboard

  const users = {
    "7676577935": "Shashidhar",
    "9448880401": "Atharva",
    "8277362743": "Sanjay",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { mobileNumber, collegeCode } = formData;

    if (mobileNumber && collegeCode) {
      if (users[mobileNumber]) {
        onLogin(users[mobileNumber]); // Pass the user's name to the Dashboard
        navigate("/dashboard"); // Navigate to Dashboard
      } else {
        alert("Invalid mobile number");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-logo">
          <img src="./Images/PPlogo.jpg" alt="Logo" className="logo-img" />
        </div>

        <h3>Student Login</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="volunteerType" className="form-label">
            Select Volunteer Type
          </label>
          <select
            id="volunteerType"
            name="volunteerType"
            value={volunteerType}
            onChange={(e) => setVolunteerType(e.target.value)}
            className="input-field"
          >
            <option value="STUDENT">STUDENT</option>
            <option value="CITIZEN">CITIZEN</option>
          </select>

          <label htmlFor="mobileNumber" className="form-label">
            Enter Your Mobile Number to Login
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="XXXXXXXXXX"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="input-field"
            required
          />

          <label htmlFor="collegeCode" className="form-label">
            College Code
          </label>
          <select
            id="collegeCode"
            name="collegeCode"
            value={formData.collegeCode}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">Select College Code</option>
            <option value="AYU0635">AYU0635</option>
            <option value="AYU0345">AYU0345</option>
            <option value="AYU0365">AYU0365</option>
            <option value="AYU0563">AYU0563</option>
          </select>

          <button type="submit" className="auth-btn">
            Send OTP
          </button>
        </form>
        <p className="login-issue">Not able to login?</p>
        <a href="#" className="form-fill-link">Please fill this form.</a>
      </div>
    </div>
  );
}

export default AuthPage;
