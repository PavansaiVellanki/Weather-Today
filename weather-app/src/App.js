import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import Weather from "./Components/Weather";

function App(){
    // setting up default state as visakhapatnam so that data will be shown defaultly for visakhapatnam when
    // reload is happened or  loaded for first time
    const [location, setLocation]=useState("Visakhapatnam");
    //setting a loading state as true it is show when data is loaded or shows loading page when loading
    const [loading, setLoading] = useState(true);
    //creating a JS onject and assigning to weather data after data being retrieved form API
    const [weatherData, setWeatherData] = useState({});

    //using use effect so while loading the page request will be running only once
    useEffect(() => {
        //function that is used to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3a4b2ad242eeb6e5e5a02195f12f79e0`
                );
                setWeatherData(response.data);
                setLoading(false);
            } catch (error) {
                <p>Oops!! this api only work with popular cities sorry for the inconvenience caused</p>
            }
        };
        fetchData();
    }, [location]);

    //getting variable city form Weather.js by sending on submit as props accepting city as argument
    const searchHandler=(city)=>{
        setLocation(city[0].toUpperCase()+city.slice(1));
    }
    //JSX
    return (
        <div className="bg">
            {/* heading */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"><h2 className="heading">Weather today</h2></div>
                    <div className="col-lg-6"><SearchBar onSearch={searchHandler}/></div>
                </div>
            </div>
            <section>
                {/* if loading is false the this is loaded */}
                {loading ? (
                    <p>Loading weather data...</p>
                ) : (
                    // weather component and sending weatherData as props
                    <Weather weatherData={weatherData}/>
                )}
            </section>
            {/* footer */}
            <footer className="footer">
                <p>©️ Pavansai, 2023</p>
                <p>Data is retrieved from openweathermap API. This is a trail pack therefore some cities might be missing.</p>
            </footer>
        </div>
    );
}
export default App;

