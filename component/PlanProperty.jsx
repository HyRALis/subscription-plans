import styles from "../styles/component/PlanProperty.module.scss";
import ArrowSvg from "../assets/send.svg";

const PlanProperty = ({ children }) => {
  return (
    <div className={styles.property}>
      <span>
        <span>
          <ArrowSvg className={styles.arrowSvg} />
        </span>
        {children}
      </span>
    </div>
  );
};

export default PlanProperty;
