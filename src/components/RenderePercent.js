const RenderePercent = (props) => {
  return (
    <>
      <h1>RenderePercent</h1>
      {props.data.map((item) => (
        <>
          Name : {item.name}
          <br />
          Percent change 1h : {item.percent_change_1h}
          <br />
          Percent change 7d : {item.percent_change_7d}
          <br />
        </>
      ))}
    </>
  );
};

export default RenderePercent;
