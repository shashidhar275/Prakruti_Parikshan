import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faVenusMars, faLocationDot, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

// Utility function to generate random members
const getRandomMembers = (size, memberName) => {
  const indianNames = {
    Male: ["Aarav", "Sanjay", "Rahul", "Karthik", "Anil", "Vijay", "Prakash", "Rajesh", "Manoj"],
    Female: ["Ananya", "Meera", "Lakshmi", "Pooja", "Riya", "Sita", "Priya", "Sneha", "Deepika"],
  };
  const karnatakaCities = ["Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore", "Davangere", "Shimoga", "Bijapur"];

  const getRandomName = (gender) =>
    indianNames[gender][Math.floor(Math.random() * indianNames[gender].length)];

  const members = [];
  for (let i = 0; i < size; i++) {
    const gender = Math.random() > 0.5 ? "Male" : "Female";
    const name = gender === "Male" ? getRandomName("Male") : getRandomName("Female");
    const age = Math.floor(Math.random() * 7) + 20; // Age between 20 to 26
    const location = `${karnatakaCities[Math.floor(Math.random() * karnatakaCities.length)]}, Karnataka`;

    members.push({
      name,
      gender,
      age,
      location,
    });
  }
  return members;
};

const Dashboard = ({ userName }) => {
  const [members, setMembers] = useState([]);
  const [totalMembers, setTotalMembers] = useState(0);

  // Generate data arrays
  const sanjayMembers = getRandomMembers(3, "Sanjay");
  const shashidharMembers = getRandomMembers(12, "Shashidhar");
  const atharvaMembers = getRandomMembers(14, "Atharva");

  useEffect(() => {
    // Determine which array to show based on userName
    switch (userName) {
      case "Sanjay":
        setMembers(sanjayMembers);
        setTotalMembers(sanjayMembers.length);
        break;
      case "Shashidhar":
        setMembers(shashidharMembers);
        setTotalMembers(shashidharMembers.length);
        break;
      case "Atharva":
        setMembers(atharvaMembers);
        setTotalMembers(atharvaMembers.length);
        break;
      default:
        setMembers([]);
        setTotalMembers(0);
    }
  }, [userName]);

  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <div
        className="top-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left Side - Username with Doctor Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span role="img" aria-label="doctor" style={{ fontSize: "1.5rem" }}>
            🩺
          </span>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            {userName} {/* Display the user's name dynamically */}
          </span>
        </div>

        {/* Right Side - Notification Icon */}
        <div>
          <span
            role="img"
            aria-label="notification"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#666",
            }}
          >
<FontAwesomeIcon icon={faBell} className="notification-icon" style={{ color: 'rgb(60, 135, 158)', fontSize: '24px' }} />
</span>
        </div>
      </div>

      {/* Total Observations */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#3c879e",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="./Images/shieldCheck.jpg"
            alt="Shield Check"
            style={{ width: "40px", height: "40px" }}
          />
          <span style={{ fontSize: "1.2rem", fontWeight: "600", color: "#333" }}>
            Total Prakriti Observation
          </span>
        </div>

        {/* Display Total Members */}
        <div
          style={{
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px 20px",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          {totalMembers}
        </div>
      </div>

      {/* Today's Observations */}
      <h2 className="section-title">Today's Prakriti Observations ({totalMembers})</h2>
      <div className="member-list">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-content">
              <div className="users-name">
                <div className="card-left-icon">
                  <FontAwesomeIcon icon={faUserPlus} className="user-icon" />
                </div>
                <h3 className="member-name">{member.name}</h3>
              </div>
              <div className="member-details">
               <div className="gender-age">
                <div className="detail">
                    <FontAwesomeIcon icon={faVenusMars} className="icon" />
                    <span>{member.gender}</span>
                  </div>
                  <div className="detail">
                    <img
                      src="./Images/age.png"
                      alt="Age"
                      className="icon-img"
                    />
                    <span>{member.age} yrs</span>
                  </div>
               </div>
                <div className="detail">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
