const Weather = ({ weather , loadWeather}) => {

    return(
        <div>
            <p onFocus={loadWeather}> {weather.main}</p>
        </div>
    )
}

export default Weather