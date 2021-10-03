import React from "react";

import FeatureA from "./featureA";
import FeatureB from "./featureB";

import RendereData from "../../components/RendereData";
import RenderePercent from "../../components/RenderePercent";
import Fetch from "../../shared/FeatureFetch";

const config = {};

config.FeatureA = {
  component: <FeatureA />,
  props: {
    nuevaProp:
      "----------------------------value nuevaProp----------------------------",
  },
};
config.FeatureB = {
  component: <FeatureB />,
};

config.FeatureFetchCoinsRenderName = {
  component: (
    <Fetch url="https://api.coinlore.net/api/tickers/?start=100&limit=100">
      <RendereData></RendereData>
    </Fetch>
  ),
};

config.FeatureFetchCoinsRenderPercent = {
  component: (
    <Fetch url="https://api.coinlore.net/api/tickers/?start=100&limit=100">
      <RenderePercent></RenderePercent>
    </Fetch>
  ),
};

export default config;
