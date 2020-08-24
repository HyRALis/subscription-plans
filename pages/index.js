import Head from "next/head";
import { useState } from "react";
import fetch from "isomorphic-unfetch";

import Plans from "../component/Plans";

function Home({ plans }) {
  const [currencies, setCurrencies] = useState([
    { value: "EUR", name: "Euro", symbol: "€" },
    { value: "CHF", name: "Franc", symbol: "CHf" },
    { value: "USD", name: "Dollar", symbol: "$" },
  ]);
  const [subTypes, setSubTypes] = useState([
    { name: "Monthly", value: 1 },
    { name: "Annually", value: 12 },
    { name: "2 years", value: 24 },
  ]);

  return (
    <div>
      <Head>
        <title>PrtonMail Plans</title>
        <meta name="description" content="Subscription plans for ProtonMail" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Plans Plans={plans} Currencies={currencies} SubTypes={subTypes} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const headers = new Headers();

  headers.append("Content-Type", "application/json;charset=utf-8");
  headers.append("x-pm-appversion", "Other");
  headers.append("x-pm-apiversion", "3");
  headers.append("Accept", "application/vnd.protonmail.v1+json");

  const reqParams = {
    method: "GET",
    headers: headers,
    mode: "cors",
    cache: "default",
  };

  const responseEUR = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=EUR`,
    reqParams
  );
  const responseUSD = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=USD`,
    reqParams
  );
  const responseCHF = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=CHF`,
    reqParams
  );

  const fullResultEUR = await responseEUR.json();
  const fullResultUSD = await responseUSD.json();
  const fullResultCHF = await responseCHF.json();

  const fourPlans = {
    EUR: fullResultEUR.Plans.splice(0, 4),
    USD: fullResultUSD.Plans.splice(0, 4),
    CHF: fullResultCHF.Plans.splice(0, 4),
  };

  return {
    props: {
      plans: fourPlans,
    },
  };
}

export default Home;
