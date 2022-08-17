import React from "react";
import "./MiddleElements.css";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function MiddleElements() {
  return (
    <div className="middle">
      <div className="middle_1">
        <div className="middle1_left">
          <img
            className="middle1_img child"
            src="https://www.interactivebrokers.co.in/images/web/home-low-cost.jpg"
            alt="logo"
          />
        </div>

        <div className="middle1_right child">
          <h1>
            Experience the Lowest Costs
            <br className="head_break" /> in the Industry
          </h1>
          <div className="middle1_para">
            <p>
              <FaCheck className="check" />
              &nbsp;&nbsp; Low commissions with no added spreads, ticket
              charges, platform fees, or account minimums.
            </p>
            <p>
              <FaCheck className="check" /> &nbsp;&nbsp;{" "}
              <span className="check">I B SmartRouting</span> helps support best
              execution by searching for the dark poles.
            </p>
            <p>
              <FaCheck className="check" />
              &nbsp;&nbsp; <span className="check">Margin rates</span> up to 66%
              lower than the industry.
            </p>
            <p>
              <FaCheck className="check" />
              &nbsp;&nbsp; Earn interest of up to{" "}
              <span className="check">USD 1.83% </span>on uninvested cash.
            </p>
            <p>
              <FaCheck className="check" /> &nbsp; Earn extra income on your
              lendable shares.
            </p>
          </div>
          <div className="middle1_btn">
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="middle_2">
        <div className="middle2_right child">
          <h1>
            Discover a World of
            <br className="head_break" /> Opportunities
          </h1>
          <div className="middle2_para">
            <p>
              Invest globally in stocks, options, futures, currencies,
              <br className="head_break" /> bonds & funds from a single
              unified platform. Fund
              <br className="head_break" /> your account in multiple currencies
              and trade assets
              <br className="head_break" /> denominated in multiple currencies.
              Access market
              <br className="head_break" /> data 24 hours a day and six days a
              week.
            </p>
            <div className="data">
              <div className="data1">
                <h1>150</h1>
                <p>Markets</p>
              </div>
              <div className="data1">
                <h1>33</h1>
                <p>Countries</p>
              </div>
              <div className="data1">
                <h1>24</h1>
                <p>Currencies</p>
              </div>
            </div>
          </div>
          <div className="middle2_btn">
            <button>Learn More</button>
          </div>
        </div>

        <div className="middle2_left">
          <img
            className="middle2_img child"
            src="https://www.interactivebrokers.com/images/web/map-solo-5320.jpg"
            alt="logo"
          />
        </div>
      </div>

      {/* <div className="middle_3">
        <div className="middle3_left">
          <img
            className="middle3_img child"
            src="https://www.interactivebrokers.com/images/web/home-tech-full.jpg"
            alt="logo"
          />
        </div>

        <div className="middle3_right child">
          <h1>
            Leverage Technology Built to Help You Get
             Ahead
          </h1>
          <div className="middle3_para">
            <div className="middle3_para_left">
              <p className="red">
                <b>
                  Trading Plateforms&nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" />
                </b>
              </p>
              <p>
                Powerful enough for the professional
                <br /> trader but designed for everyone. <br />
                Available on desktop, mobile and
                <br /> web.
              </p>
              <p className="red">
                <b>
                  Order Types and Algos&nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" />
                </b>
              </p>
              <p>
                Powerful enough for the professional
                <br /> trader but designed for everyone. <br />
                Available on desktop, mobile and
                <br /> web.
              </p>
            </div>
            <div className="middle3_para_right">
              <p className="red">
                <b>
                  Free Trading Tools&nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" />
                </b>
              </p>
              <p>
                Powerful enough for the professional
                <br /> trader but designed for everyone. <br />
                Available on desktop, mobile and
                <br /> web.
              </p>
              <p className="red">
                <b>
                  Comprehensive Reporting&nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" />
                </b>
              </p>
              <p>
                Powerful enough for the professional
                <br /> trader but designed for everyone. <br />
                Available on desktop, mobile and
                <br /> web.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="middle_3">
        <div className="left_grid_3">
          <img
            src="https://www.interactivebrokers.com/images/web/home-tech-full.jpg"
            alt="logo"
          />
        </div>
        <div className="right_grid_3">
          <h2>Leverage Technology Built to Help You Get Ahead</h2>
          <div className="right_inner_grid">
            <div className="left_inner_grid_left">
              <p className="red">Trading Professionals &nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" /></p>
              <p>
                Powerful enough for the professional trader but designed for
                everyone. Available on desktop, mobile and web.
              </p>
              <br/>
              <p className="red">Order Types and Algos &nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" /></p>
              <p>
                100+ order types – from limit orders to complex algorithmic
                trading – help you execute any trading strategy.
              </p>
            </div>
            <div className="left_inner_grid_right">
              <p className="red">Free Trading Tools &nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" /></p>
              <p>
                Spot market opportunities, analyze results, manage your account
                and make better decisions with our free trading tools.
              </p>
              <br/>
              <p className="red">Comprehensive Reporting &nbsp;{" "}
                  <MdKeyboardArrowRight className="arrowRight" /></p>
              <p>
                Real-time trade confirmations, margin details, transaction cost
                analysis, sophisticated portfolio analysis and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_4">
        <div className="middle4_right child">
          <h1>A Broker You Can Trust</h1>
          <div className="middle4_para">
            <p>
              When placing your money with a broker, you need to make sure your
              broker is
              <br /> secure and can endure through good and bad times. Our
              strong capital position,
              <br /> conservative balance sheet and automated risk controls are
              designed to protect
              <br /> IBKR and our clients from large trading losses.
            </p>
            <div className="data">
              <div className="data1">
                <h1>IBKR</h1>
                <p>Nasdaq Listed</p>
              </div>
              <div className="data1">
                <h1>$10.60B</h1>
                <p>Equity Capital</p>
              </div>
              <div className="data1">
                <h1>76.3%</h1>
                <p>Privately Held</p>
              </div>
            </div>
            <div className="data">
              <div className="data2">
                <h1>$7.4B</h1>
                <p>Excessive Regulatory</p>
              </div>
              <div className="data2">
                <h1>1.92M</h1>
                <p>Clients Accounts</p>
              </div>
              <div className="data2">
                <h1>2.17M</h1>
                <p>Daily Avg. Revenue</p>
              </div>
            </div>
          </div>
          <div className="middle4_btn">
            <button>IBKR Protection</button>
          </div>
          <div className="info">
            <p>
              *Interactive Brokers Group and its affiliates. For additional
              information view our Investors Relations - Earnings Release
              section by clicking here.
            </p>
          </div>
        </div>

        <div className="middle4_left">
        <img
          className="middle4_img child"
          src="https://www.interactivebrokers.com/images/web/home-security.jpg"
          alt="logo"
        />
        </div>
      </div>
    </div>
  );
}

export default MiddleElements;
