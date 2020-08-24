import DropDown from "./DropDown";
import styles from "../styles/component/Options.module.scss";

const Options = ({ Currencies, SubTypes, SetCurrency, SetSubType }) => {
  return (
    <div className={styles.container}>
      <DropDown
        OptionList={Currencies}
        Name="Currency"
        Id="CurrencySelect"
        setValue={SetCurrency}
      />
      <DropDown
        OptionList={SubTypes}
        Name="Subscription Type"
        Id="SubscriptionTypeSelect"
        setValue={SetSubType}
      />
    </div>
  );
};

export default Options;
