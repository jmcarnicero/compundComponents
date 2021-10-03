import React from "react";

import FeatureC from "./featureC";
import FeatureD from "./featureD";

const config = {};

config.FeatureC = {
  title: "Accordion",
  subTitle: "Subtitle example",
  description: "description Accordion",
  component: <FeatureC />,
};
config.FeatureD = {
  title: "Carrousel",
  subTitle: "Subtitle example",
  description: "description Carrousel",
  component: <FeatureD />,
};

export default config;
