import React from "react";

const RenderComponent = (props) => {
  const rednerComponent = (props) => {
    return React.cloneElement(props.config[props.featureName].component, {
      ...props,
      ...props.config[props.featureName].props,
    });
  };

  return (
    <>
      {rednerComponent(props)}
      {props.children}
    </>
  );
};

export default RenderComponent;
