import React, { useState } from "react";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <ul className="flex gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          onClick={toggleDarkMode} 
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
          🌙/☀️
        </button>
      </nav>
    </header>
  );
};

export default Header;
