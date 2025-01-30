import React, { useContext } from "react";
import { ThemeContext } from "./context";

const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  console.log("Current theme:", theme); // Debugging

  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2 className={` ${theme === "dark"? "text-white":"text-black"}`} >
        Dark Light Mode Website
      </h2>
      <p
        className={`my-4 text-l ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Hello!! My React v19 Fans 👍
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkLight;
