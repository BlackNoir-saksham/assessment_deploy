import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "./Hamburger.css";
import { Link } from "react-router-dom";
function Hamburger({close}) {
  return (
    <div className="menu">
      <div className="menu_head">
        <img
          src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png"
          alt="log"
        />
        <span className="close">
          <Link to="/">
            <AiOutlineClose className="close-btn" onClick={close}/>
          </Link>
        </span>
      </div>
      <div className="menu-items">
        {/* <h5><span className='Red'>Portal Login</span></h5>
        <h5><span className='Red'>Open Account</span><IoIosArrowForward className="forward_icon"/></h5>
        <h5>Free Trial</h5>
        <h5>Why IBKR</h5>
        <h5>Account Types <IoIosArrowForward className="forward_icon"/></h5>
        <h5>Pricing <IoIosArrowForward className="forward_icon"/></h5>
        <h5>Trading <IoIosArrowForward className="forward_icon"/></h5>
        <h5>Services <IoIosArrowForward className="forward_icon"/></h5>
        <h5>Education <IoIosArrowForward className="forward_icon"/></h5>
        <h5>About Us <IoIosArrowForward className="forward_icon"/></h5>
        <h5>Support <IoIosArrowForward className="forward_icon"/></h5> */}
        <h5>
          <span className="Red">Portal Login</span>
        </h5>
        <h5>
          <span className="Red">Open Account</span>
        </h5>
        <h5>Free Trial</h5>
        <h5>Why IBKR</h5>
        <h5>Account Types </h5>
        <h5>Pricing</h5>
        <h5>Trading </h5>
        <h5>Services </h5>
        <h5>Education </h5>
        <h5>About Us</h5>
        <h5>Support </h5>
      </div>
    </div>
  );
}

export default Hamburger;
