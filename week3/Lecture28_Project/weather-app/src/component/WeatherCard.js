import { getWeatherTypeCode, convetToFahrenheit } from "../utils/Weatherutil";

const dateFormatter = new Intl.DateTimeFormat("en-In",{
    month: "short",
    day:"2-digit",
    year:"numeric",

}) ;

const formatDate = (date) => dateFormatter.format(date);

const WeatherCard = ({weather: {date, maxTemperature, minTemperature, weatherCode}, isCelsius})=>{
    // console.log(weathercode);
    return(
        <>
            <tr>
                <td><h4>{formatDate(date)}</h4></td>
                <td><h4>
                    H : {isCelsius?`${maxTemperature}°C` : `${convetToFahrenheit(maxTemperature)}°F`} | 
                    L : {isCelsius?`${minTemperature}°C` : `${convetToFahrenheit(minTemperature)}°F`}
                </h4></td>
                <td><h4>{getWeatherTypeCode(weatherCode)}</h4></td>
            </tr>
        </>
    );
}

export default WeatherCard;