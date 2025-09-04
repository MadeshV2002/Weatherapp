import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import './App.css'
function App() {
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
    <h1>🌦 Weather Dashboard</h1>
    <SearchBar setWeather={setWeather} />
    {weather && <WeatherCard weather={weather} />}
  </div>
  );
}

export default App;
