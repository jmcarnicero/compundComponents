import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";

import Layaout from "./components/Layaout";
import RenderComponent from "./components/RenderComponent";

import LiabilityConfig from "./domains/liability/LiabilityConfig";
import MedicalConfig from "./domains/medical/mediacalConfig";
import NegotiationConfig from "./domains/negotiation/negotationConfig";

const configFeatures = Object.assign(
  LiabilityConfig,
  MedicalConfig,
  NegotiationConfig
);

function App() {
  const [featureSelected, setFeatureSelected] = useState("FeatureA");
  const [featureInfo, setFeatureInfo] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const renderFeatureNames = () => {
    const setDataFeature = (item) => {
      setFeatureInfo({
        title: configFeatures[item].title,

        subTitle: configFeatures[item].subTitle,
        description: configFeatures[item].description,
      });

      setFeatureSelected(item);
    };

    return Object.keys(configFeatures).map((item) => {
      return <button onClick={() => setDataFeature(item)}>{item}</button>;
    });
  };

  console.log("featureInfo", featureInfo);

  return (
    <Layaout>
      {renderFeatureNames()}
      <RenderComponent
        featureName={featureSelected}
        config={configFeatures}
        title={featureInfo.title}
        subTitle={featureInfo.subTitle}
        description={featureInfo.description}
      ></RenderComponent>
    </Layaout>
  );
}

export default App;
