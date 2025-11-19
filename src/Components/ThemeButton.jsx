import React, { useContext } from "react";
import { ThemeContext } from "../Context/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Themebutton = ({className}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <button className={className} onClick={() => toggleTheme()}>
      {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default Themebutton;