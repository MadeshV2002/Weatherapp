import sunIcon from "../assets/sun.png";
import cloudIcon from "../assets/cloud.png";
import snowIcon from "../assets/snow.png";
import heavyRainIcon from "../assets/heavy-rain.png";
import drizzleIcon from "../assets/drizzle.png";           

function WeatherCard({ weather }) {
  let icon;

  if (weather.main.temp < 15) {
    if(weather.weather[0].main === "Clear") icon = cloudIcon;
    else if(weather.weather[0].main === "Rain") icon = heavyRainIcon;
    else icon = snowIcon;
  } else if (weather.main.temp < 30) {
    if(weather.weather[0].main === "Clear") icon = sunIcon;
    else if(weather.weather[0].main === "Clouds") icon = cloudIcon;
    else if(weather.weather[0].main === "Rain") icon = heavyRainIcon;
    else icon = drizzleIcon;
  } else {
    if(weather.weather[0].main === "Clear") icon = sunIcon;
    else if(weather.weather[0].main === "Clouds") icon = cloudIcon;
    else icon = drizzleIcon;
  }

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <h3>{weather.weather[0].main}</h3>

      
      <img src={icon || heavyRainIcon} alt="weather Icon" />

      <p
        style={{
          color:
            weather.main.temp < 15
              ? "blue"
              : weather.main.temp < 30
              ? "green"
              : "red",
          fontWeight: "bold",
        }}
      >
        🌡 Temp: {weather.main.temp} °C
      </p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind: {weather.wind.speed} m/s</p>
      <p>☁ Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
