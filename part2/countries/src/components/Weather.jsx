const Weather = ({weather}) => {
    if(!weather){
        return(
            <div>waiting for weather data</div>
        )
    }

    const baseUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    
    return (
        <div>
            {weather ?<div>temperature {weather.main.temp} Celcius</div> : 'Waiting for weather data'}
            <img src={baseUrl}/>
            {weather ?<div>wind {weather.wind.speed} m/s</div> : null}
        </div>
    )
}

export default Weather