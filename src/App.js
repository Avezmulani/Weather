import Search from "./components/search/search";
import "./App.css"
import WeatherCurr from "./components/weather-curr/WeatherCurr";
import { WEATHER_API_KEY,WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast";
import styled from "styled-components"

function App() {
  const [currentWeather,setCurrWeather]= useState(null);
  const [forecastWeather, setForecastWeather] =useState(null);
  const handleOnSearchChange=(searchData)=>{
    const [lat,long]= searchData.value.split(" ");
    const getWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const WeatherForecast =fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    )

    Promise.all([getWeather,WeatherForecast])
        .then(async (response)=>{
          const weatherResponse = await response[0].json();
          const forecastResponse= await response[1].json();

          setCurrWeather({city: searchData.label,...weatherResponse});
          setForecastWeather({city: searchData.label,...forecastResponse});
        })
        .catch((err)=> console.log(err));

        // console.log(currentWeather);
        // console.log(forecastWeather);


  }
  return(
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      { currentWeather && <WeatherCurr data={currentWeather}/>}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  )
}

const Search =styled.div`
  border-radius:50px;
`

export default App;
