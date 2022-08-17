import React from "react";
import "./Features.css";
function Features() {
  return (
    <div className="features">
      <div className="f_1">
        <img
          className="f_1_img"
          src="https://www.interactivebrokers.co.in/images/web/crd-low-cost.svg"
          alt="logo"
        />
        <div className="f_text">
          <h5>Lower Costs</h5>
          <p>
            Our transparent, low commissions and
            <br /> financing rates minimize costs to maximize
            <br /> returns.
          </p>
        </div>
      </div>
      <div className="f_2">
        <img
          className="f_2_img"
          src="https://www.interactivebrokers.co.in/images/web/crd-global-access.svg"
          alt="logo"
        />
        <div className="f_text">
          <h5>Globat Access</h5>
          <p>
            Invest globally in stocks, options, futures,
            <br /> currencies, bonds and funds from a single
            <br /> unified platform.
          </p>
        </div>
      </div>
      <div className="f_3">
        <img
          className="f_3_img"
          src="https://www.interactivebrokers.co.in/images/web/crd-technology.svg"
          alt="logo"
        />
        <div className="f_text">
          <h5>Premier Technology</h5>
          <p>
            IBKR's powerful suite of technology helps
            <br /> you optimize your trading speed and
            <br /> efficiency and perform sophisticated
            <br /> portfolio analysis
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
