function FeatureInfo({ title = "", subTitle = "", description = "" }) {
  return (
    <div>
      {title ? <h2>{title}</h2> : null}
      {subTitle ? <h5>{subTitle}</h5> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default FeatureInfo;
