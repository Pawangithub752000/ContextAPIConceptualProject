import { createRoot } from "react-dom/client";
import { CartContextProvider } from "./context/CartContext";
import { ThemeContextProvider } from "./context/ThemeContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ThemeContextProvider>
);
