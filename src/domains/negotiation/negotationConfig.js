import React from "react";

import FeatureE from "./featureE";
import FeatureF from "./featureF";

const config = {};

config.FeatureE = {
  title: "Group item",
  subTitle: "Subtitle example",
  description: "description Group item",
  component: <FeatureE />,
};
config.FeatureF = {
  title: "simple Table",
  subTitle: "Subtitle example",
  description: "description simple Table",
  component: <FeatureF />,
};

export default config;
