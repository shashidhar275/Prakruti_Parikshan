import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVenusMars,
  faLocationDot,
  faBell,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

// Utility function to generate random members
const getRandomMembers = (size, memberName) => {
  const indianNames = {
    Male: [
      "Aarav",
      "Sanjay",
      "Rahul",
      "Karthik",
      "Anil",
      "Vijay",
      "Prakash",
      "Rajesh",
      "Manoj",
    ],
    Female: [
      "Ananya",
      "Meera",
      "Lakshmi",
      "Pooja",
      "Riya",
      "Sita",
      "Priya",
      "Sneha",
      "Deepika",
    ],
  };
  const karnatakaCities = [
    "Bangalore",
    "Mysore",
    "Hubli",
    "Belgaum",
    "Mangalore",
    "Davangere",
    "Shimoga",
    "Bijapur",
  ];

  const getRandomName = (gender) =>
    indianNames[gender][Math.floor(Math.random() * indianNames[gender].length)];

  const members = [];
  for (let i = 0; i < size; i++) {
    const gender = Math.random() > 0.5 ? "Male" : "Female";
    const name =
      gender === "Male" ? getRandomName("Male") : getRandomName("Female");
    const age = Math.floor(Math.random() * 7) + 20; // Age between 20 to 26
    const location = `${
      karnatakaCities[Math.floor(Math.random() * karnatakaCities.length)]
    }, Karnataka`;

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
  const shashidharMembers = getRandomMembers(78, "Shashidhar");
  const atharvaMembers = getRandomMembers(194, "Atharva");
  const vinayMembers = getRandomMembers(152, "Vinay");
  const prajwalMembers = getRandomMembers(189, "Prajwal");
  const rahulMembers = getRandomMembers(160, "Rahul");
  const manjunathMembers = getRandomMembers(198, "Manjunath");
  const yogeshMembers = getRandomMembers(183, "Yogesh");
  const todaysObservation = 25;

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
      case "Vinay":
        setMembers(vinayMembers);
        setTotalMembers(vinayMembers.length);
        break;
      case "Prajwal":
        setMembers(prajwalMembers);
        setTotalMembers(prajwalMembers.length);
        break;
      case "Rahul":
        setMembers(rahulMembers);
        setTotalMembers(rahulMembers.length);
        break;
      case "Manjunath":
        setMembers(manjunathMembers);
        setTotalMembers(manjunathMembers.length);
        break;
      case "Yogesh":
        setMembers(yogeshMembers);
        setTotalMembers(yogeshMembers.length);
        break;
      default:
        setMembers([]);
        setTotalMembers(0);
    }
  }, [userName]);

  return (
    <div>
      {/* Top Bar */}
      <div
        className="top-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottom: "1px solid white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left Side - Username with Doctor Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            className="stethoscope"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "36px",
              padding: "10px 10px",
              backgroundColor: "#e8eaed",
            }}
          >
            <span role="img" aria-label="doctor">
              <FontAwesomeIcon
                icon={faStethoscope}
                style={{ color: "#03296e", fontSize: "16px" }}
              />
            </span>
          </div>
          <span
            className="poppins-thin"
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#03296e",
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
            <FontAwesomeIcon
              icon={faBell}
              className="notification-icon"
              style={{ color: "#007598", fontSize: "24px" }}
            />
          </span>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Total Observations */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background:
              "linear-gradient(145deg, rgba(232, 87, 237, 0.15) 0%, rgba(109, 137, 69, 0.15) 100%), linear-gradient(75deg, rgb(32 86 109), rgb(0, 241, 239))",
            padding: "25px 20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            marginTop: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="./Images/shieldCheck1.png"
              alt="Shield Check"
              style={{ width: "55px", height: "55px" }}
            />
            <div className= "poppins-extralight">
              <span
                style={{ fontSize: "1.2rem", fontWeight: "300", color: "white" }}
              >
                Total Prakriti Observation
              </span>
            </div>
          </div>

          {/* Display Total Members */}
          <div
            style={{
              backgroundColor: "#fff",
              color: "#333",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "1px dashed grey",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              fontSize: "1.5rem",
              fontWeight: "700",
              padding: "16px 20px"
            }}
          >
            {totalMembers}
          </div>
        </div>

        {/* Today's Observations */}
        <h4 style={{  fontWeight: "600" }} className="section-title poppins-extralight">
          Todays Prakriti observation{" "}
          <span style={{ color: "#1F7EA1" }}>({todaysObservation})</span>
        </h4>
        <div className="member-list">
          {members.slice(0, todaysObservation).map((member, index) => (
            <div key={index} className="member-card">
              <div className="card-content">
                <div className="users-name">
                  <div className="card-left-icon">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      style={{ color: "#007598" }}
                      className="user-icon"
                    />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                </div>
                <div className="member-details">
                  <div className="gender-age">
                    <div className="detail">
                      <FontAwesomeIcon
                        icon={faVenusMars}
                        style={{ color: "#007598" }}
                        className="icon"
                      />
                      <span>{member.gender}</span>
                    </div>
                    <div className="detail">
                      <img
                        src="./Images/ageImg.png"
                        alt="Age"
                        className="icon-img"
                      />
                      <span>{member.age} yrs</span>
                    </div>
                  </div>
                  <div className="detail">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#007598" }}
                      className="icon"
                    />
                    <span>{member.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
