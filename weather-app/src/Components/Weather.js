function Weather({weatherData}){
    // function used for inline css in style tag for changing the direction of arrow mark to show wind direction
    let direction = "0deg";
    if (weatherData.wind.deg > 0){
        direction="rotate("+weatherData.wind.deg+"deg)";
    }

    //this block of code is used to calculate sunrise time from UTC time to normal time
    var rise = weatherData.sys.sunrise;
    var risetime = new Date(rise * 1000);
    var sunrise = risetime.toLocaleTimeString();

    //this block of code is used to calculate sunset time from UTC time to normal time
    var set = weatherData.sys.sunset;
    var setTime = new Date(set * 1000);
    var sunset = setTime.toLocaleTimeString();

    //valiable used to get weather description and change the classname div accordingly to load images as per desc from index.css file
    var des = weatherData.weather[0].main;
    console.log(des);

    //JSX
    return (
        <div className={des}>
            <div className="data">
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h1><i className="fa-solid fa-temperature-three-quarters"></i>  {weatherData.main.temp} °C</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img className="desc" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="desc"/>
                    </div>
                </div>

                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>{weatherData.name},{weatherData.sys.country}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className="coordinates"><i className="fa-sharp fa-solid fa-location-dot"></i>   {weatherData.coord.lon}, {weatherData.coord.lat}</p>
                    </div>
                </div>
                {/******************************/}
                <hr/>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Feels like: {Math.round(weatherData.main.feels_like)} °C</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Description: {weatherData.weather[0].description[0].toUpperCase()+weatherData.weather[0].description.slice(1)}</p>
                    </div>
                </div>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Humidity: {weatherData.main.humidity}%</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Pressure: {weatherData.main.pressure} mbar</p>
                    </div>
                </div>
                {/******************************/}
                <hr/>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Min temperature : {weatherData.main.temp_min} °C</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Max temperature : {weatherData.main.temp_max} °C</p>
                    </div>
                </div>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Wind speed: {weatherData.wind.speed} m/s</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Direction : {weatherData.wind.deg}° <i className="fa-solid fa-arrow-right" style={{transform: direction}}></i></p>
                    </div>
                </div>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Visibility : {weatherData.visibility/1000} Km</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Sea leve : {weatherData.main.sea_level} hPa</p>
                    </div>
                </div>
                {/******************************/}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Sun rise : {sunrise}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p>Sun set : {sunset}</p>
                    </div>
                </div>
                {/******************************/}  
            </div>
        </div>
    );
}
export default Weather;

