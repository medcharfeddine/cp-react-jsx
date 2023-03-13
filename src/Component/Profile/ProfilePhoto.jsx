import React from "react";
import Med from "../../images/med.jpg";
import "./profile.css";

const ProfilePhoto = () => {
  return (
    <div className="mb-5">
      <div className="backs rounded">
        <img className="rounded prf" src={Med} alt="Profile" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
