import React from "react";
import Hamburger from "./Hamburger";

function Cart({ open, close }) {
  if (!open) {
    return null;
  } else {
    return (
      <div>
        <Hamburger close={close}/>
      </div>
    );
  }
}

export default Cart;
