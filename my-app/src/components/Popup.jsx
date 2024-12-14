import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000); // Vanish after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup">
      <img
        src="./Images/splashScreen.jpg"
        alt="Popup"
        className="popup-image"
      />
    </div>
  );
}

export default Popup;
