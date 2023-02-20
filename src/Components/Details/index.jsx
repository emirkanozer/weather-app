import React from "react";
import styles from "./styles.module.scss";
function Details() {
  return (
    <div className={styles.wrapper}>
      <p>Weather Details</p>
      <div className={styles.info}>
        <div className={styles.weather}>
          <h4>Cloudy</h4>
        </div>
        <div className={styles.weather}>
          <h4>Humidity</h4>
        </div>
        <div className={styles.weather}>
          <h4>Wind</h4>
        </div>
        <div className={styles.weather}>
          <h4>Rain</h4>
        </div>
      </div>
    </div>
  );
}

export default Details;
