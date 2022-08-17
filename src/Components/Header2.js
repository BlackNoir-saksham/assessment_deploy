import React, { useState, useEffect, useRef } from "react";
import "./Header2.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { auth } from "./firebase";
import Cart from "./Cart";

function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  });

  const scroll = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleAuth = () => {
    if (auth) {
      auth.signOut();
    }
  };
  return (
    <div className="header2">
      <div className="header2__left">
        <img className="header2_img_1" src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png" />
        <div className="img__2">
        <img className="header2_img_2" src="https://www.interactivebrokers.co.in/images/web/logos/ibkr-logo-text-black.svg" />
        </div>
      </div>
      <div className="header2__right">
        <div className="options">
          <p>Why IBKR</p>
        </div>
        <div className="options">
          <p>Pricing</p>
        </div>
        <div className="options">
          <p>Trading</p>
        </div>
        <div className="options">
          <p>Services</p>
        </div>
        <div className="options">
          <p>Education</p>
        </div>
        <div className="icon options">
          <p>
            <FaSearch />
          </p>
        </div>

        <div className="login" onClick={handleAuth} >
          <Link to="/login">
            <button>{auth ? "Log-Out" : "Log-In"}</button>
          </Link>
        </div>
        <div className="openAccountTop">
          <Link to="/login" onClick={scroll}>
            <button>Open Account</button>
          </Link>
        </div>
        <div>
          {/* <Link to="/hamburger">
            <GiHamburgerMenu className="menu-btn" />
          </Link> */}
          <div onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu className="menu-btn" />
          </div>
          <div ref={menuRef}>
            <Cart open={isOpen} close={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
