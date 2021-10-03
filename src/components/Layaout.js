const Layaout = (props) => {
  return (
    <section className="jumbotron text-center">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Layaout;
