import React from "react";

import FeatureA from "./featureA";
import FeatureB from "./featureB";

import RendereData from "../../components/RendereData";
import RenderePercent from "../../components/RenderePercent";
import Fetch from "../../shared/FeatureFetch";

const config = {};

config.FeatureA = {
  title: "Table",
  subTitle: "Subtitle example",
  description: "description table",
  component: <FeatureA />,
  props: {
    nuevaProp:
      "----------------------------value nuevaProp----------------------------",
  },
};
config.FeatureB = {
  title: "Form example",
  subTitle: "Subtitle example",
  description: "description Form example",
  component: <FeatureB />,
};

config.FeatureFetchCoinsRenderName = {
  title: "Render coins name",
  subTitle: "Subtitle example",
  description: "description Render coins name",
  component: (
    <Fetch url="https://api.coinlore.net/api/tickers/?start=100&limit=100">
      <RendereData></RendereData>
    </Fetch>
  ),
};

config.FeatureFetchCoinsRenderPercent = {
  title: "Render percent coins",
  subTitle: "Subtitle example",
  description: "description Render percent coins",
  component: (
    <Fetch url="https://api.coinlore.net/api/tickers/?start=100&limit=100">
      <RenderePercent></RenderePercent>
    </Fetch>
  ),
};

export default config;
