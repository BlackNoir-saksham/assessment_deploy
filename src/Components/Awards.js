import React from "react";
import "./Awards.css";
function Awards() {
  return (
    <div className="awards">
      <h5>AWARD WINNING PLATFORM & SERVICES</h5>
      <div className="actual_awards">
        <div className="award_1">
          <img
            src="https://www.interactivebrokers.co.in/images/web/2022_sb-badge-1-professional-trading.png"
            alt="logo"
          />
          <p>
            #1 Professional Trading
            <br />
            #1 Offering of Investments
          </p>
        </div>
        <div className="award_2">
          <img
            src="https://www.interactivebrokers.co.in/images/2015/award-benzinga-best-trading-tech-2020.png"
            alt="logo"
          />
          <p>
            2020 Benzinga
            <br />
            Best Trading Technology
          </p>
        </div>
        <div className="award_3">
          <img
            src="https://www.interactivebrokers.co.in/images/web/award-barrons-2022-best-online-broker-crop.png"
            alt="logo"
          />
          <p>
            #1 Best Online Broker
            <br />5 out of 5 stars
          </p>
        </div>
        <div className="award_4">
          <img
            src="https://www.interactivebrokers.co.in/images/web/awards-investopedia-2022-General.png"
            alt="logo"
          />
          <p>
            4.6 out of 5 stars
            <br />
            Overall
          </p>
        </div>
        <div className="award_5">
          <img
            src="https://www.interactivebrokers.co.in/images/2015/award-nw-2020-crop.png"
            alt="logo"
          />
          <p>
            Best Broker for<br></br>
            Low-Cost Investing
          </p>
        </div>
      </div>
      <div className="award_btn">
        <button>See All Awards</button>
      </div>
    </div>
  );
}

export default Awards;
