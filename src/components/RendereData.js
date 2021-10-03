const RendereData = (props) => {
  
    return (
    <>
      <h1>RendereData</h1>
      {props.data.map((item) => (
        <>
          Name : {item.name}
          <br />
          Btc price : {item.price_btc}
          <br />
          Usd price : {item.price_usd}
          <br />
        </>
      ))}
    </>
  );
};

export default RendereData;
