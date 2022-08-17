import React from "react";
import "./CarouselItem3.css";
function CarouselItem3() {
  return (
    <div className="item3">
      <div className="text3">
        <h1 className="heading3">
          Interactive Brokers:
          <br />
          Rated Lowest Margin Fees
          <br /> by StockBrokers.com
        </h1>
        <p className="mid-para">
          IBKR charges margin loan rates from <b>USD 2.83% to USD 3.83%*</b>
        </p>
        <div className="btn3">
          <button>Learn More</button>
        </div>
        <p className="para3">
          *Restrictions apply. Annual Percentage Rate (APR) on USD margin loan
          balances as of 7/29/22.<br/> Interactive Brokers calculates the interest
          charged on margin loans using the applicable rates for<br/> each interest
          rate tier listed on its website. For additional information on margin
          loan rates .<br/> 
          <a href="https://www.interactivebrokers.co.in/en/index.php?f=46782&p=m">click here.</a>
        </p>
      </div>
    </div>
  );
}

export default CarouselItem3;
