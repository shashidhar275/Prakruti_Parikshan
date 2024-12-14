import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [userName, setUserName] = useState(""); // State to hold the logged-in user’s name

  // Handle the login process
  const onLogin = (name) => {
    setUserName(name); // Set the user name received from AuthPage
  };

  return (
    <Router>
      <div className="app-container">
        {showPopup ? (
          <Popup onClose={() => setShowPopup(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<AuthPage onLogin={onLogin} />} />
            <Route path="/dashboard" element={<Dashboard userName={userName} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
