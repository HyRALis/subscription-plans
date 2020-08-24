import styles from "../styles/component/DropDown.module.scss";

const DropDown = ({ OptionList, Name, Id, setValue }) => {
  return (
    <select
      className={styles.select}
      name={Name}
      id={Id}
      onChange={(e) => setValue(e.target.value)}
    >
      {OptionList.length != 0 ? (
        OptionList.map((element) => (
          <option key={element.name} value={element.value}>
            {element.symbol !== undefined
              ? `${element.symbol}  ${element.name}`
              : element.name}
          </option>
        ))
      ) : (
        <option>No Options</option>
      )}
    </select>
  );
};

export default DropDown;
