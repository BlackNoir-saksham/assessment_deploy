// import React from "react";
// import Logo from "../logo.png";
// import "./LogIn.css";
// import { Link } from "react-router-dom";

// function LogIn() {

//   const signIn = e =>{
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <div className="logIn">
//         <a href="/">
//           <img className="logIn__logo" src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png" alt="logo"></img>
//         </a>

//         <div className="logIn__container">
//           <h1>Sign-in</h1>
//           <form>
//             <h5>E-mail</h5>
//             <input type="text" />

//             <h5>Password</h5>
//             <input type="password" />

//             <button type="submit" className="logIn__signInButton" onClick={signIn}>
//               Sign-in
//             </button>
//           </form>
//           <p>
//             By signing-in you agree to Amazon's Conditions of Use & Sale. Please
//             see our provacy Notice, our Cookies Notice and our Interest-Based
//             Ads Notice
//           </p>
//           <Link to="/signup">
//             <button className="logIn__registerButton">
//               Create Your Amazon Account
//             </button>
//           </Link>
//         </div>
//         <div className="footer">
//           <p className="footer__p">
//             All Rights Are Reserved to 'Saksham Srivastava'
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LogIn;

import React, { useState } from "react";
import { auth } from "./firebase";
import "./LogIn.css";
import {useHistory} from 'react-router-dom'
import SignUp from "./SignUp";

function LogIn() {

  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);

      if(auth){
        history.push('/')
      }

    }).catch(error => alert(error.message))

  };

  const scroll = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="logIn">
        <a href="/">
          <img
            className="logIn__logo"
            src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png"
            alt="logo"
          ></img>
        </a>

        <div className="logIn__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="logIn__signInButton"
              onClick={signIn}
            >
              Sign-in
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our provacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice
          </p>
          {/* <div onClick={scroll}> */}
            <button
              className="logIn__registerButton"
              onClick={() => {setOpen(true) ; scroll()}}
            >
              Create Your Amazon Account
            </button>
          {/* </div> */}
        </div>
        <div className="footer">
          <p className="footer__p">
            All Rights Are Reserved to 'Saksham Srivastava'
          </p>
        </div>
        <SignUp isOpen={open} register={register} setEmail={setEmail} setPassword={setPassword} email={email} password={password} />
      </div>
    </div>
  );
}

export default LogIn;
