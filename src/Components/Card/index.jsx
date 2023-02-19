import React from "react";
// import Input from "../Input";
import styles from "./styles.module.scss";
import Left from "../Left";
import Input from "../Input";
import Details from "../Details";

function Card() {
  return (
    <div className={styles.wrapper}>
      <Left></Left>
      <div className={styles.right}>
        <div className={styles.search}>
          <Input></Input>
        </div>
        <div className={styles.details}>
          <Details></Details>
        </div>
      </div>
    </div>
  );
}

export default Card;
