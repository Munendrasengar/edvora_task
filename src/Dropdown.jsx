import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [getData, setData] = useState([]);

  const [product, setProduct] = useState("");
    const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  const fetchData = () => {
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <select
        className="form-select"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{ marginTop: "20px" }}
      >
                <option value="">Select-product</option>

        {getData.map((item) => {
          return <>
          <option value={item.brand_name}>{item.brand_name}</option>
          </>;
        })}
      </select>
      <select
        className="form-select"
        value={state}
        onChange={(e) => setstate(e.target.value)}
        style={{ marginTop: "20px" }}
      >
        <option selected>State</option>
  
        {getData.map((item) => {
          return <>
          <option value={item.address.state}>{item.address.state}</option>
          </>;
        })}
      </select>
      <select
        className="form-select"
        aria-label="Default select example"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        style={{ marginTop: "20px" }}
      >
        <option selected>City</option>
    
        {getData.map((item) => {
          return <>
          <option value={item.address.city}>{item.address.city}</option>
          </>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
