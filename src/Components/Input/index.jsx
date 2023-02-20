import React from "react";
import { useInput } from "../../Context/InputContext";
import styles from "./styles.module.scss";

function Input() {
  const { handleButtonClick, inputRef } = useInput();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <div className={styles.search}>
          <input placeholder="Enter City" ref={inputRef} />
        </div>
        <button onClick={handleButtonClick}>Search</button>
      </div>
      <div>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
      </div>
    </div>
  );
}

export default Input;
