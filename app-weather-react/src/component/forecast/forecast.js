import React from "react";
import "./forecast.css";

const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ForeCast = ({ data }) => {
  // Calculate the current day and reorder the week days
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div>
      <div className="title">7day Forecast</div>
      <div className="forecast-container">
        {data.list.slice(0, 7).map((item, indx) => (
          <div className="forecast-item" key={indx}>
            <div className="days">{forecastDays[indx]}</div>

            <div className="forecast-details">
              <p className="description">   {item.weather[0].description}</p>
              <label className="min-max">
               <div>

               <span> max: {Math.round(item.main.temp_max)}°C </span>|<span> max: {Math.round(item.main.temp_min)}°C </span>
               </div>
              </label>
              <div className="additional-info">
                <span>Pressure: {item.main.pressure} hPa</span>
                <span>Humidity: {item.main.humidity}%</span>
                <span>Wind: {item.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCast;
