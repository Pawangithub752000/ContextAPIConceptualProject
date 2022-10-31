import React from "react";

export const CartContext = React.createContext();
// CartContext.Provider - Component

// useState, useReducer

export function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = (val) => {
    //+2
    setCartCount(cartCount + val);
  };

  return (
    <CartContext.Provider value={{ cartCount, handleCartCount }}>
      {children}
      {/* <App /> */}
    </CartContext.Provider>
  );
}

//CartContext.Provider is a raper it rapred the whole
//application, Means ye aak boundry ke through pure application
//and uske component ko contain kar ke rakhta

// You can pass Anything in CartContext.Provider under value like :-
// boolean, string, array, object, function ...

// CartContext.Provider comes from
//React.createContext()

// Here line number 8 pass two thing cartCount and setCartCount, iske useState me jo value mai
// passkarunga wahi value cart ke output me show hoga kyuki wo initial value hai and cartCount
// ka use maine navbar component me bhi use kiya gya hai
