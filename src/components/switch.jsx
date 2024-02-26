/*"use client"
import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cambiar el tema al hacer clic
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-theme', !isDarkMode);
  };

  // Aplicar el tema guardado al cargar el componente
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  // Guardar el tema en localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="toggle-bar" onClick={toggleTheme}>
      <div className="sun-wrapper">
        {}
      </div>
      <button className="toggle-button">
        <div className="toggle-circle"></div>
      </button>
      <div className="moon-wrapper">
        {}
      </div>
    </div>
  );
};

export default ThemeToggler;
*/