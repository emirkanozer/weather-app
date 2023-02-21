import { useInput } from "../../Context/InputContext";
import React from "react";
import styles from "./styles.module.scss";

function Details() {
  const { weatherData } = useInput();
  return (
    <div className={styles.wrapper}>
      <p>Weather Details</p>
      {weatherData && (
        <div className={styles.info}>
          <div className={styles.weather}>
            <h4>Cloudy</h4>
            <h4 className={styles.detail}>{weatherData.cloud} %</h4>
          </div>
          <div className={styles.weather}>
            <h4>Humidity</h4>
            <h4 className={styles.detail}> {weatherData.humidity} % </h4>
          </div>
          <div className={styles.weather}>
            <h4>Wind</h4>
            <h4 className={styles.detail}> {weatherData.wind_kph} km/h </h4>
          </div>
          <div className={styles.weather}>
            <h4>Feels Like</h4>
            <h4 className={styles.detail}>{weatherData.feelslike_c} °C</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
