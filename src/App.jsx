import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { cartDataReducer, initialState } from "./Reducer/Reducer";
import MovieList from "./components/Cinema/MovieList/MovieList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  MovieContext,
  ThemeContext,
} from "./context/MovieContext/MovieContext";

function App() {
  // State for Cart Data Reducer
  const [state, dispatch] = useReducer(cartDataReducer, initialState);

  // DarkMode
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {/* Header Component */}
        <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
          <Header></Header>

          {/* Main Part */}
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              {/* Sidebar Component */}
              <Sidebar></Sidebar>

              {/* Content */}
              <MovieList></MovieList>
            </div>
          </main>

          {/* Footer Component */}
          <Footer></Footer>
        </div>
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
