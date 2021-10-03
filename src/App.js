import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";

import Layaout from "./components/Layaout";
import RenderComponent from "./components/RenderComponent";

import LiabilityConfig from "./domains/liability/LiabilityConfig";
import MedicalConfig from "./domains/medical/mediacalConfig";
import NegotiationConfig from "./domains/negotiation/negotationConfig";

const configFeatures = Object.assign(LiabilityConfig, MedicalConfig, NegotiationConfig);

function App() {
  const [featureSelected, setFeatureSelected] = useState("FeatureA");

  const renderFeatureNames = () => {
    return Object.keys(configFeatures).map((item) => {
      return <button onClick={()=>setFeatureSelected(item)}>{item}</button>;
    });
  };

  return (
    <Layaout>
      {renderFeatureNames()}
      <RenderComponent
        featureName={featureSelected}
        config={configFeatures}
        title="Data table"
        subTitle="Subtitle example"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
      ></RenderComponent>   
    </Layaout>
  );
}

export default App;
