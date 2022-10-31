import React from "react";
import { CartContext } from "../context/CartContext";

const Button = () => {
  const { handleCartCount } = React.useContext(CartContext);

  return <button onClick={() => handleCartCount(1)}>ADD TO CART</button>;
};

export default Button;
