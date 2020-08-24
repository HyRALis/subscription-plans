import styles from "../styles/component/PlanProperty.module.scss";
import ArrowSvg from "../assets/send.svg";

const PlanProperty = ({ children }) => {
  return (
    <div className={styles.property}>
      <span>
        <span>
          <ArrowSvg
            style={{
              width: "1rem",
              height: "1rem",
              "margin-right": "1rem",
              fill: "currentColor",
            }}
          />
        </span>
        {children}
      </span>
    </div>
  );
};

export default PlanProperty;
