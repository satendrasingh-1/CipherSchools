import { convetToFahrenheit, getWeatherType } from "../utils/Weatherutil";

const WeatherSummary = ({currentWeather: {temperature, weatherCode},isCelsius} )=>{
    return(
        <>
            <h1>
                {!isCelsius ? `${convetToFahrenheit(temperature)}°F `: `${temperature}°C ` }  
                | {getWeatherType(weatherCode)}
            </h1>
        </>
    )
}

export default WeatherSummary;