import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVenusMars,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = () => {
  const [totalMembers, setTotalMembers] = useState(5);

  const members = [
    { name: "Abhishek Sagarnal", gender: "Male", age: 21, location: "Bagalkot, Karnataka" },
    { name: "Rahul Melmani", gender: "Male", age: 22, location: "Koppal, Karnataka" },
    { name: "Samartha Shetty", gender: "Male", age: 22, location: "Shimoga, Karnataka" },
    { name: "Samartha Shetty", gender: "Male", age: 22, location: "Shimoga, Karnataka" },
    { name: "Samartha Shetty", gender: "Male", age: 22, location: "Shimoga, Karnataka" },
    { name: "Samartha Shetty", gender: "Male", age: 22, location: "Shimoga, Karnataka" }
  ];

  return (
    <div className="dashboard-container">
      {/* Top Bar */}
<div className="top-bar" style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    // padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    fontFamily: "Arial, sans-serif",
}}>
    {/* Left Side - Username with Doctor Icon */}
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span role="img" aria-label="doctor" style={{ fontSize: "1.5rem" }}>
            🩺
        </span>
        <span style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#333",
        }}>
            Atharva
        </span>
    </div>

    {/* Right Side - Notification Icon */}
    <div>
        <span role="img" aria-label="notification" style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#666",
        }}>
            🔔
        </span>
    </div>
</div>


      {/* Total Observations */}
      <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3c879e",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
}}>
    {/* Left Side - Image */}
    <div style={{ display: "flex", height: "70px" , alignItems: "center", gap: "10px" }}>
        <img 
            src="./Images/shieldCheck.jpg" 
            alt="Shield Check" 
            style={{ width: "40px", height: "40px" }}
        />
        <span style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#333",
        }}>
            Total Prakriti Observation
        </span>
    </div>

    {/* Right Side - Number Box */}
    <div style={{
        backgroundColor: "#fff",
        color: "#333",
        padding: "10px 20px",
        borderRadius: "6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        fontSize: "1.5rem",
        fontWeight: "700",
    }}>
        150
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
                <div className="detail">
                    <div className="detail">
                    <FontAwesomeIcon icon={faVenusMars} className="icon" />
                    <span>{member.gender}</span>
                    </div>
                    <div className="detail">
                    <img src="./Images/age.png" alt="Age" className="icon-img" />
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