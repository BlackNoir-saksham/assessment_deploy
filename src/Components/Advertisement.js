// import React from "react";
// import "./Advertisement.css";
// import {Link} from 'react-router-dom'

// function Advertisement() {
//   const scroll = () => {
//     window.scrollTo({
//       left: 0,
//       top: document.body.scrollHeight,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div className="ad">
//       <h3>Choose the Best Account Type for You</h3>
//       <div className="line">
//         <div className="first_half">
//         <div className="line_1">
//           <img
//             className="needMore"
//             src="https://www.interactivebrokers.com/images/web/acct-type-individual.svg"
//             alt="logo"
//           />
//           <p>Individual Accounts</p>
//         </div>
//         <div className="line_2">
//           <img
//             className="needLess"
//             src="https://www.interactivebrokers.com/images/web/acct-type-joint.svg"
//             alt="logo"
//           />
//           <p>Joint Accounts</p>
//         </div>
//         <div className="line_3">
//           <img
//             className="needMore"
//             src="https://www.interactivebrokers.com/images/web/acct-type-retirement-ira.svg"
//             alt="logo"
//           />
//           <p>Retirement Accounts</p>
//         </div>
//         </div>
//         <div className="second_half">
//         <div className="line_4">
//           <img
//             className="needLess"
//             src="https://www.interactivebrokers.com/images/web/acct-type-trust.svg"
//             alt="logo"
//           />
//           <p>Trust Accounts</p>
//         </div>
//         <div className="line_5">
//           <img
//             className="needMore"
//             src="https://www.interactivebrokers.com/images/web/acct-type-friends-family.svg"
//             alt="logo"
//           />
//           <p>Family Accounts</p>
//         </div>
//         <div className="line_6">
//           <img
//             className="needLess"
//             src="https://www.interactivebrokers.com/images/web/acct-type-institution.svg"
//             alt="logo"
//           />
//           <p>Institutional Accounts</p>
//         </div>
//         </div>
//       </div>

//       <div className="banner">
//         <div className="steps">
//           <div className="step1">
//             <h3>Step 1</h3>
//             <h5>Complete the Application</h5>
//             <p>It takes only a few minutes</p>
//           </div>
//           <div className="step1">
//             <h3>Step 1</h3>
//             <h5>Complete the Application</h5>
//             <p>It takes only a few minutes</p>
//           </div>
//           <div className="step1">
//             <h3>Step 1</h3>
//             <h5>Complete the Application</h5>
//             <p>It takes only a few minutes</p>
//           </div>
//         </div>
//         <div className="openAccountAd">
//           <Link to="/login" onClick={scroll}>
//             <button>Open an Account</button>
//           </Link>
//         </div>
//       </div>

//       <div className="link">
//         <a href="https://www.interactivebrokers.co.in/en/index.php?f=53126">
//           Attention Investors
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Advertisement;

import React from "react";
import "./Advertisement.css";
import { Link } from "react-router-dom";

function Advertisement() {
  const scroll = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="ad">
      <h3>Choose the Best Account Type for You</h3>
      <div className="line">
        <div className="line_1">
          <img
            className="needMore"
            src="https://www.interactivebrokers.com/images/web/acct-type-individual.svg"
            alt="logo"
          />
          <p>Individual Accounts</p>
        </div>
        <div className="line_2">
          <img
            className="needLess"
            src="https://www.interactivebrokers.com/images/web/acct-type-joint.svg"
            alt="logo"
          />
          <p>Joint Accounts</p>
        </div>
        <div className="line_3">
          <img
            className="needMore"
            src="https://www.interactivebrokers.com/images/web/acct-type-retirement-ira.svg"
            alt="logo"
          />
          <p>Retirement Accounts</p>
        </div>

        <div className="line_4">
          <img
            className="needLess"
            src="https://www.interactivebrokers.com/images/web/acct-type-trust.svg"
            alt="logo"
          />
          <p>Trust Accounts</p>
        </div>
        <div className="line_5">
          <img
            className="needMore"
            src="https://www.interactivebrokers.com/images/web/acct-type-friends-family.svg"
            alt="logo"
          />
          <p>Family Accounts</p>
        </div>
        <div className="line_6">
          <img
            className="needLess"
            src="https://www.interactivebrokers.com/images/web/acct-type-institution.svg"
            alt="logo"
          />
          <p>Institutional Accounts</p>
        </div>
      </div>

      <div className="banner">
        <div className="steps">
          <div className="step1">
            <h3>Step 1</h3>
            <h5>Complete the Application</h5>
            <p>It takes only a few minutes</p>
          </div>
          <div className="step1">
            <h3>Step 2</h3>
            <h5>Fund Your Account</h5>
            <p>Connect your bank or transfer an account</p>
          </div>
          <div className="step1">
            <h3>Step 3</h3>
            <h5>Get Started Trading</h5>
            <p>Take your investing to the next level</p>
          </div>
        </div>
        <div className="openAccountAd">
          <Link to="/login" onClick={scroll}>
            <button>Open an Account</button>
          </Link>
        </div>
      </div>

      <div className="link">
        <a href="https://www.interactivebrokers.co.in/en/index.php?f=53126">
          Attention Investors
        </a>
      </div>
    </div>
  );
}

export default Advertisement;
