import React from "react";
import styles from "./styles.module.scss";
import { useInput } from "../../Context/InputContext";
function Left() {
  const { weatherData } = useInput();
  console.log(weatherData);
  return (
    <div className={styles.wrapper}>
      <img
        alt="Weather Thumbnails"
        src="https://4kwallpapers.com/images/wallpapers/sunrise-blue-sky-panorama-early-morning-dawn-5k-3440x1440-3644.jpg"
      />
      <div className={styles.msg}>
        {weatherData && (
          <div>
            <h1>{weatherData.humidity}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Left;
