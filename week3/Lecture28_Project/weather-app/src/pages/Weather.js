import { useEffect, useState } from "react";
import WeatherSummary from "../component/WeatherSummary";
import WeatherCard from "../component/WeatherCard";
import getWeather from "../api/WeatherApi";

const fetchCoordinates = (callback)=>{
    navigator.geolocation.getCurrentPosition((
        {coords: {latitude,longitude}})=>{
            callback(latitude,longitude);
        },
        (err)=> console.error(err)
    );
}

const Weather = ()=>{

    const [todayWeather, setTodayWeather] = useState({});
    const [weekWeather, setWeekWeather] = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);
    const isDay = todayWeather.isDay ?? true;

    useEffect (()=>{
        fetchCoordinates(async (latitude,longitude) =>{
            const weatherInfo= await getWeather({latitude,longitude});

            convertToStateVariable(weatherInfo);
        })
    },[])
    

    const convertToStateVariable = (tempWeekWeather)=>{
        let fetchWeatherInfo = [];
        for(let i=0;i<tempWeekWeather.daily.time.length;i++){
            fetchWeatherInfo.push({
                date:  new Date(tempWeekWeather.daily.time[i]),
                maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
                minTemperature: tempWeekWeather.daily.temperature_2m_min[i],
                weatherCode: tempWeekWeather.daily.weathercode[i],
                
            });
        }
        setWeekWeather(fetchWeatherInfo);

        let currentWeather = tempWeekWeather.current_weather;
        currentWeather.time=new Date(currentWeather.time);
        currentWeather.isDay = currentWeather.is_day === 1 ? true: false;
        delete currentWeather.is_day;
        currentWeather.weatherCode = currentWeather.weathercode;
        delete currentWeather.weathercode ;
        setTodayWeather(currentWeather);
    } 

    
    return(
        <>
            <div className={isDay? "app": "app dark"}>
                <h1 className="my-heading">Weather</h1>
                <button className="ui icon button"
                    style={{float:"right"}}
                    onClick={()=>{
                        setIsCelsius(!isCelsius);
                    }}
                >
                    {isCelsius? "°F": "°C"}
                </button>
                <div className={ `my-heading ${isDay? "": "dark"}`}>
                    <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius}/>
                </div>
                <div>
                    <table className="ui celled table "  
                    style={!isDay ? {backgroundColor:"black", color: "white"}:{}} >
                        <thead className="table-custom" >
                            <tr>
                                <th>Date</th>
                                <th>Temperature</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody className="table-custom">
                            {weekWeather.map((weather) => (<WeatherCard
                                weather ={weather} isCelsius={isCelsius} key={weather.date}
                            />))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Weather;




















// import { useEffect, useState } from "react";
// import WeatherSummary from "../component/WeatherSummary";
// import WeatherCard from "../component/WeatherCard";
// import getWeather from "../api/WeatherApi";

// const fetchCoordinates = (callback) => {
//     navigator.geolocation.getCurrentPosition(
//         ({ coords: { latitude, longitude } }) => {
//             callback(latitude, longitude);
//         },
//         (err) => console.error(err)
//     );
// };

// const Weather = () => {
//     const [todayWeather, setTodayWeather] = useState({});
//     const [weekWeather, setWeekWeather] = useState([]);
//     const [isCelsius, setIsCelsius] = useState(true);
//     const isDay = todayWeather.isDay ?? true;

//     const converToStateVariable = (tempWeekWeather) => {
//         if (!tempWeekWeather || !tempWeekWeather.daily || !tempWeekWeather.current_weather) {
//             console.error('Invalid weather data:', tempWeekWeather);
//             return;
//         }

//         const { daily, current_weather } = tempWeekWeather;
//         let fetchWeatherInfo = [];

//         if (daily.time && daily.temperatue_2m_max && daily.temperatue_2m_min && daily.Weathercode) {
//             for (let i = 0; i < daily.time.length; i++) {
//                 fetchWeatherInfo.push({
//                     date: new Date(daily.time[i]),
//                     maxTemperature: daily.temperatue_2m_max[i],
//                     minTemperature: daily.temperatue_2m_min[i],
//                     weatherCode: daily.Weathercode[i],
//                 });
//             }
//         } else {
//             console.error('Incomplete daily weather data:', daily);
//         }

//         setWeekWeather(fetchWeatherInfo);

//         let currentWeather = current_weather;
//         currentWeather.time = new Date(currentWeather.time);
//         currentWeather.isDay = currentWeather.is_day === 1 ? true : false;
//         delete currentWeather.is_day;
//         currentWeather.weatherCode = currentWeather.weathercode;
//         delete currentWeather.weathercode;

//         setTodayWeather(currentWeather);
//     };

//     useEffect(() => {
//         fetchCoordinates(async (latitude, longitude) => {
//             const weatherInfo = await getWeather({ latitude, longitude });
//             converToStateVariable(weatherInfo);
//         });
//     }, []);

//     return (
//         <>
//             <div className={isDay ? "app" : "app dark"}>
//                 <h1 className="my-heading">Weather</h1>
//                 <button className="ui icon button" style={{ float: "right" }}>
//                     °F
//                 </button>
//                 <div className={`my-heading ${isDay ? "" : "dark"}`}>
//                     <WeatherSummary />
//                 </div>
//                 <div>
//                     <table className="ui celled table" style={!isDay ? { backgroundColor: "black", color: "white" } : {}}>
//                         <thead className="table-custom">
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Temperature</th>
//                                 <th>Type</th>
//                             </tr>
//                         </thead>
//                         <tbody className="table-custom">
//                             <WeatherCard />
//                             <WeatherCard />
//                             <WeatherCard />
//                             <WeatherCard />
//                             <WeatherCard />
//                             <WeatherCard />
//                             <WeatherCard />
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Weather;
