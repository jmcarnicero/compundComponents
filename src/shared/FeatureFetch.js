import React, { useEffect, useState } from "react";

function Fetch(props) {
  const [data, setDataFetch] = useState([]);

  const fetchData = async (url) => {
    let response = await fetch(url);

    if (response.status === 200) {
      let responseJson = await response.json();
      responseJson.data.length = 10
      setDataFetch(responseJson.data );
    }
  };

  useEffect(() => {
    fetchData(props.url);
  }, []);

  return <div>{React.cloneElement(props.children, { data })}</div>;
}

export default Fetch;
