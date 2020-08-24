import React from "react";

import styles from "../styles/component/ButtonPlan.module.scss";

const ButtonPlan = ({ ButtonLabel }) => {
  return <button className={styles.button}>{ButtonLabel}</button>;
};

export default ButtonPlan;
