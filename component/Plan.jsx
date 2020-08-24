import React from "react";
import ButtonPlan from "./ButtonPlan";
import PlanProperty from "./PlanProperty";

import styles from "../styles/component/Plan.module.scss";

const Plan = ({ Content, Currency, SubType }) => {
  const storageCalc = (bytes) => {
    var marker = 1024;
    var decimal = 0;
    var kiloBytes = marker;
    var megaBytes = marker * marker;
    var gigaBytes = marker * marker * marker;

    if (bytes < kiloBytes) return bytes + " Bytes";
    else if (bytes < megaBytes)
      return (bytes / kiloBytes).toFixed(decimal) + " KB";
    else if (bytes < gigaBytes)
      return (bytes / megaBytes).toFixed(decimal) + " MB";
    else return (bytes / gigaBytes).toFixed(decimal) + " GB";
  };

  const price = (pricing, months) => {
    const money = pricing / (100 * months);
    return parseFloat(money.toFixed(2));
  };
  return (
    <div className={styles.container}>
      {Content.Header !== undefined && (
        <header>
          <h3>{Content.Header}</h3>
        </header>
      )}
      <h2>{Content.Name.toUpperCase()}</h2>

      {Content.Pricing[SubType] !== undefined ? (
        <div>
          <span>
            {Currency.symbol}
            <b>{price(Content.Pricing[SubType], SubType)}</b>/mo
          </span>
          <span>
            Billed as{" "}
            {parseFloat(
              (price(Content.Pricing[SubType], SubType) * 12).toFixed(2)
            )}
            {Currency.symbol} per year
          </span>
        </div>
      ) : (
        <h3>No price for this subscription time</h3>
      )}
      <h3>{Content.Description}</h3>
      <div className={styles.properties}>
        <PlanProperty>
          <span> 1 user</span>
        </PlanProperty>

        <PlanProperty>
          <span> {storageCalc(Content.MaxSpace)} of storage</span>
        </PlanProperty>

        <PlanProperty>
          {Content.MaxAddresses > 1 ? (
            <span> {Content.MaxAddresses} addresses</span>
          ) : Content.MaxAddresses === 0 ? (
            <span> No address</span>
          ) : (
            <span> {Content.MaxAddresses} address</span>
          )}
        </PlanProperty>

        <PlanProperty>
          {Content.MaxDomains > 1 ? (
            <span> Supports {Content.MaxDomains} doomains</span>
          ) : Content.MaxDomains === 0 ? (
            <span> No domain support</span>
          ) : (
            <span> Supports {Content.MaxDomains} domain</span>
          )}
        </PlanProperty>

        {Content.Features !== "" && (
          <PlanProperty>
            <span> {Content.Features}</span>
          </PlanProperty>
        )}

        <PlanProperty>
          <span> {Content.ProtonVPN}</span>
        </PlanProperty>
      </div>
      <ButtonPlan ButtonLabel={"Select"} />
    </div>
  );
};

Plan.defaultProps = {
  Header: false,
};

export default Plan;
