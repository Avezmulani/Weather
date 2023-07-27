import "./weather.css"
import React from 'react'

export default function WeatherCurr({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img src= {`icons/${data.weather[0].icon}.png`} alt="" className="weather-icon"></img>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)  }°C</p>
        <div className="more-info">
          <div className="parameter-row">
            <span className="label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels Like :</span>
            <span className="label"> {Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind:</span>
            <span className="label"> {data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity :</span>
            <span className="label"> {data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure :</span>
            <span className="label"> {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}
