const Weather = ({ weather, loadWeather }) => {
    return (
      <div>
        {weather.map((item, index) => (
          <div key={index}>
            <p>Main Weather: {item.weather[0].main}</p>
            <p>Description: {item.weather[0].description}</p>
            <p>Temperature: {item.main.temp} K</p>
            <p>Humidity: {item.main.humidity}%</p>
            {/* Add more information as needed */}
            <button onFocus={() => loadWeather(item.coord.lat, item.coord.lon)}>
              Load Weather
            </button>
          </div>
        ))}
      </div>
    );
  };

  export default Weather