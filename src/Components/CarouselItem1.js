import React from "react";
import "./CarouselItem1.css";
function CarouselItem1() {
  return (
    <div className="item1">
      <div className="text1">
        <h1 className="heading1">
          Interactive Brokers clients
          <br />
          earn up to USD 1.83% on <br />
          their idle cash balances*
        </h1>
        <div className="btn1">
          <button>Learn More</button>
        </div>
        <p className="para1">
          *Restrictions apply. For additional information on interest rates, 
          <a className="a" href="https://www.interactivebrokers.co.in/en/index.php?f=46788">
             {` `}click here.
          </a>
          <br /> Credit interest rate as of 7/29/2022.
        </p>
      </div>
    </div>
  );
}

export default CarouselItem1;
