// import { Carousel } from 'bootstrap';
import "./App.css";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Carousel from "./Components/Carousel";
import Features from "./Components/Features";
import Awards from "./Components/Awards";
import MiddleElements from "./Components/MiddleElements";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

import Advertisement from "./Components/Advertisement";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/hamburger">
            <Hamburger />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Header1 />
            <Header2 />
            <div className="carousel">
              <Carousel />
            </div>
            <Features />
            <Awards />
            <MiddleElements />
            <Advertisement />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
