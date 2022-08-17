import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_1">
        <p>
          1.&nbsp;&nbsp; Lowest Cost Broker according to StockBrokers.com Online
          Broker Survey 2022:{" "}
          <a href="https://www.stockbrokers.com/review/interactivebrokers">
            Read the full article
          </a>{" "}
          Online Broker Reviews, January 11, 2022. "Because Interactive Brokers'
          core clientele are professional traders and institutional investors
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; (e.g., hedge funds), it is crucial to provide
          the lowest commissions schedule available. In our rigorous assessment,
          there is no question Interactive Brokers delivers."
        </p>
        <br />
        <p>
          2. &nbsp;&nbsp;Lower investment costs will increase your overall
          return on investment, but lower costs do not guarantee that your
          investment will be profitable.
        </p>
        <br />
        <p>
          3.&nbsp;&nbsp; For complete information, see{" "}
          <a href="https://www.interactivebrokers.co.in/en/index.php?f=1340">
            ibkr.com/compare
          </a>
        </p>
        <br />
        <p>
          4. &nbsp; Restrictions apply. For additional information on interest
          rates,
          <a href="https://www.interactivebrokers.co.in/en/index.php?f=46788">
            click here
          </a>{" "}
          Credit interest rate as of 7/29/2022.
        </p>
      </div>

      <hr />

      <div className="footer_2">
        <p>
          Interactive Brokers ®, IBSM, InteractiveBrokers.com ®, Interactive
          Analytics ®, IB Options AnalyticsSM, IB SmartRouting, PortfolioAnalyst
          ®, IB Trader Workstation and One World, One Account are service marks
          and/or trademarks of
          <br /> Interactive Brokers LLC. Supporting documentation for any
          claims and statistical information will be provided upon request. Any
          trading symbols displayed are for illustrative purposes only and are
          not intended to portray recommendations.
        </p>
        <br />
        <p>
          The risk of loss in online trading of stocks, options, futures,
          currencies, foreign equities, and fixed Income can be substantial.
        </p>
        <br />
        <p>
          Options involve risk and are not suitable for all investors. For more
          information read the
          <a href=""> Characteristics and Risks of Standardized Options</a>,
          also known as the options disclosure document (ODD). Alternatively,
          call 312-542-6901 to receive a copy <br />
          of the ODD. Before trading, clients must read the relevant risk
          disclosure statements on our{" "}
          <a href="">Warnings and Disclosures page</a>. Trading on margin is
          only for experienced investors with high risk tolerance. You may lose
          more than your initial
          <br /> investment. For additional information about rates on margin
          loans, please see <a href="">Margin Loan Rates</a>. Security futures
          involve a high degree of risk and are not suitable for all investors.
          The amount you may lose may be greater than your initial <br />
          investment. Before trading security futures, read the{" "}
          <a href="">Security Futures Risk Disclosure Statement</a>. Structured
          products and fixed income products such as bonds are complex products
          that are more risky and are not suitable for all investors.
          <br /> Before trading, please read the{" "}
          <a href="">Risk Warning and Disclosure Statement</a>.
        </p>
        <br />
        <p>
          For information on the IBKR ATS, please{" "}
          <a href="">visit the SEC site.</a>
        </p>
      </div>

      <div className="footer_3">
        <div className="column_1">
          <div className="row_1">
            <h6>Account</h6>
            <p>Log In</p>
            <p>Finish an Application</p>
            <p>Account Types</p>
            <p>Free Trial</p>
          </div>
          <div className="row_2">
            <h6>Software & Downloads</h6>
            <p>Trader Workstation</p>
            <p>IBKR Mobiles</p>
            <p>APIs</p>
          </div>
        </div>

        <div className="column_2">
          <div className="row_1">
            <h6>Support</h6>
            <p>Fund Your Account</p>
            <p>For Individuals</p>
            <p>For Institutions</p>
            <p>Institutional Sales Contacts</p>
            <p>Browse our FAQs</p>
          </div>
        </div>

        <div className="column_3">
          <div className="row_1">
            <h6>About Us</h6>
            <p>Awards</p>
            <p>Careers</p>
            <p>Information and History</p>
            <p>Investor Relations</p>
            <p>News @ IBKR</p>
            <p>Press and Media</p>
            <p>Regulatory Reports</p>
          </div>
        </div>

        <div className="column_4">
          <div className="row_1">
            <h6>Follow Us on Social Media</h6>
            <p>
              <FaFacebook className="i_icon" />
              &nbsp;&nbsp;Facebook
            </p>
            <p>
              <FaInstagram className="i_icon" />
              &nbsp;&nbsp;Instagram
            </p>
            <p>
              <FaLinkedin className="i_icon" />
              &nbsp;&nbsp;LinkedIn
            </p>
            <p>
              <FaTwitter className="i_icon" />
              &nbsp;&nbsp;Twitter
            </p>
            <p>
              <FaYoutube className="i_icon" />
              &nbsp;&nbsp;Youtube
            </p>
          </div>
        </div>
      </div>

      <div className="footer_4">
        <div className="Row">
          <p className="Row_1">Anti-Fraud Notice</p>
          <p className="Row_2"> Forms and Disclosures</p>
          <p className="Row_3"> Investor Grievances</p>
          <p className="Row_4">CSR Policy</p>
          <p className="Row_5">Policies</p>
          <p className="Row_6">Terms of Use</p>
          <p className="Row_7">Site Map</p>
        </div>
      </div>

      <div className="footer_5">
        <h5>Interactive Brokers India Pvt. Ltd.</h5>
        <p>
          Is a member of NSE, BSE, SEBI. Regn. No. SEBI Registration No.
          INZ000217730; NSDL: IN-DP-NSDL-301-2008. CIN-U67120MH2007FTC170004.
        </p>
        <p>
          <b>Registered Office:</b> &nbsp;502/A, Times Square, Andheri Kurla Road, Andheri
          East, Mumbai 400059, India.
        </p>
        <p><b>Phone:</b> +91-22-61289888 | <b>Fax:</b> +91-22-61289898.</p>
        <p><b>Website:</b>  <a href="https://www.interactivebrokers.co.in/en/home.php">www.interactivebrokers.co.in</a></p>
        <div className="lastLine">
            <h5><span className="arrowRight"><MdOutlineKeyboardArrowRight/></span> Information on Other Interactive Brokers Affiliates</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
