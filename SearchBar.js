import { useState } from "react";

function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const apiKey = "2be2c3a4589e0d060c2841f12d9d60a4"; // ✅ your API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
