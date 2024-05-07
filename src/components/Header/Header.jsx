import { useContext, useState } from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import cart from "../../assets/shopping-cart.svg";
import {
  MovieContext,
  ThemeContext,
} from "../../context/MovieContext/MovieContext";
import CardDetails from "../Cinema/CardDetails/CardDetails";

export default function Header() {
  // State for Show/Hide Cart Details
  const [showCart, setShowCart] = useState(false);

  // Get Cart Data from Context
  const { state } = useContext(MovieContext);

  // Get Theme Context
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Function for handleCartShow
  function handleCartShow() {
    setShowCart(true);
  }

  // Function for Cart Close
  function handleCartClose() {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <CardDetails onClose={handleCartClose} />}

      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a onClick={() => setDarkMode (darkMode => !darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleCartShow}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={cart} width="24" height="24" alt="" />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[2px] w-[20px] h-[20px] flex justify-center items-center">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
