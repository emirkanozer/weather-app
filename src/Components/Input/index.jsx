import React from "react";
import { useInput } from "../../Context/InputContext";
import styles from "./styles.module.scss";

function Input() {
  const { handleButtonClick, inputRef, citys, fetchData } = useInput();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <div className={styles.search}>
          <input placeholder="Enter City" ref={inputRef} />
        </div>
        <button onClick={handleButtonClick}>Search</button>
      </div>
      <div className={styles.citys}>
        <div className={styles.border}>
          {citys.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  fetchData(item.city);
                }}
              >
                {item.city}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Input;
