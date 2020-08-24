import { useState } from "react";

import Options from "./Options";
import Plan from "./Plan";

import styles from "../styles/component/Plans.module.scss";

const Plans = ({ Plans, Currencies, SubTypes }) => {
  const [currency, setCurrency] = useState(Currencies[0].value);
  const [subType, setSubType] = useState(SubTypes[0].value);

  // Nardcoded arrays
  const noUsers = [1, 1, 5000, 6];
  const header = ["MOST POPULAR", " ", " ", " "];
  const description = [
    "Full-featured mailbox with advaced protection",
    "The basics for private and secure communications",
    "ProtonMail for professionals and businesses",
    "ProtonMail for families and small businesses",
  ];
  const features = [
    "Supports folders, labels, filters, auto-reply, IMAP/SMTP and more",
    "",
    "Catch all email, multi user managemet, priority support and more",
    "Includes all features",
  ];
  const protonVpn = [
    "ProtonVpn (optional) *",
    "ProtonVpn (optional) *",
    "ProtonVpn (optional) *",
    "Includes ProtonVPN",
  ];
  const completePlans = Plans[currency].map((plan, index) => ({
    ...plan,
    Header: header[index],
    Description: description[index],
    Users: noUsers[index],
    Features: features[index],
    ProtonVPN: protonVpn[index],
  }));

  return (
    <div className={styles.plans}>
      <h2>Plans & prices</h2>
      <Options
        Currencies={Currencies}
        SubTypes={SubTypes}
        SetCurrency={setCurrency}
        SetSubType={setSubType}
      />
      <div className={styles.plansContainer}>
        {Plans !== undefined &&
          completePlans.map((element) => (
            <Plan
              key={element.ID}
              Content={element}
              Currency={Currencies.find((object) => object.value === currency)}
              SubType={subType}
            />
          ))}
      </div>
    </div>
  );
};

export default Plans;
