// import React , {useState} from "react";
// import "./SignUp.css";

// function SignUp() {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   return (
//     <div>
//       <div>
//         <div className="signUp">
//           <a href="/">
//             <img className="signUp__logo" src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png" alt="logo"></img>
//           </a>

//           <div className="signUp__container">
//             <h1>Create Account</h1>
//             <form>
//               <h5>First Name</h5>
//               <input type="text" placeholder="First name..." />

//               <h5>Last Name</h5>
//               <input type="text" placeholder="Last name..." />

//               <h5>Phone Number</h5>
//               <input type="text" />

//               <h5>E-mail</h5>
//               <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

//               <h5>Password</h5>
//               <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
//             </form>

//             <button className="signUp__registerButton">
//               Create Your Amazon Account
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ isOpen, register, setEmail, setPassword, email, password }) {
  if (isOpen === false) {
    return null;
  } else {
    return (
      <div>
        <div>
          <div className="signUp">
            <a href="/">
              <img
                className="signUp__logo"
                src="https://cdn-cpapa.nitrocdn.com/ymOIiISvfwfhKKlcNHQkeJnhLXeukOqq/assets/static/optimized/rev-2dc9606/wp-content/uploads/2020/04/Interactive-Brokers-Banner-with-White-Background-1024x195.png"
                alt="logo"
              ></img>
            </a>

            <div className="signUp__container">
              <h1>Create Account</h1>
              <form>
                <h5>First Name</h5>
                <input type="text" placeholder="First name..." />

                <h5>Last Name</h5>
                <input type="text" placeholder="Last name..." />

                <h5>Phone Number</h5>
                <input type="text" />

                <h5>E-mail</h5>
                <input
                  type="text"
                  value={email}
                  onChange={e =>setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  
                />
              </form>

              <button className="signUp__registerButton" onClick={register}>
                Create Your Amazon Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
