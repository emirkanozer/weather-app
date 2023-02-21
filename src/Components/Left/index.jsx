import React from "react";
import styles from "./styles.module.scss";
import { useInput } from "../../Context/InputContext";
function Left() {
  const { weatherData, location } = useInput();
  console.log(weatherData);
  return (
    <div className={styles.wrapper}>
      <img
        alt="Weather Thumbnails"
        src="https://media.discordapp.net/attachments/1008816299155144715/1077579857862602762/emirke_sky_aesthetic_background_blue_to_white_gradient_high_qua_d057ae77-fa0f-4f9b-9c63-4a3df997d5b3.png"
      />
      <div className={styles.msg}>
        {weatherData && (
          <div className={styles.content}>
            <div>
              <span>{weatherData.temp_c} °</span>
            </div>
            <div className={styles.center}>
              <h1>{location.name} </h1>
              <h4>{location.localtime} </h4>
            </div>
            <div className={styles.state}>
              <h1>{weatherData.condition.text}</h1>
              <img src={weatherData.condition.icon} alt="Hava durumu ikonu" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Left;
