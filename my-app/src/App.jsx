import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {showPopup ? (
          <Popup onClose={() => setShowPopup(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
