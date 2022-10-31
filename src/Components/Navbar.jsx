import React from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext} from "../context/ThemeContext"
import styled from "styled-components";


const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 50px;
  background: ${({theme}) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const Navbar = () => {
  const { cartCount } = React.useContext(CartContext);
  const { theme } = React.useContext(ThemeContext);

  return <NavbarWrapper theme={theme}>Cart Count : {cartCount}</NavbarWrapper>;
};
export default Navbar;

// CartContext Ko Navbar me import kiya gya kyuki
// AddCart wale option ko Navbar me add karna hai
// Context API ka use kar ke means props ko without
//component to component pass kiye hue means
// parent to child, child to grand child, grandChild to greate grand child
// wale process kiye bina mens without props
// driling process kiye bina

// Jo file hum import karte hai usi ko React Hook ke under likhte hai
// like yaha pr CartContext file import kiya gya hai islia
// line 5 me React.useContext ke under CartContext ko hi pass karaya gya hai
