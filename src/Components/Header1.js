import React from "react";
import { useState } from "react";
import Dropdown1 from "./DropDowns/Dropdown1";
import "./Header1.css";

function Header1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header1">
        <div className="header1__left">
          <div className="para" onClick={() => setIsOpen(true)}>
            <p>For Individuals</p>
            <p className="arrow">⏷</p>
          </div>

          <div className="para">
            <p>For Institutions</p>
            <p className="arrow">⏷</p>
          </div>
        </div>

        <div className="header1__right">
          <div className="para">
            <p>FREE TRIAL</p>
          </div>
          <div className="para">
            <p>Careers</p>
          </div>
          <div className="para">
            <p>About Us</p>
            <p className="arrow">⏷</p>
          </div>
          <div className="para">
            <p>Support</p>
            <p className="arrow">⏷</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header1;
