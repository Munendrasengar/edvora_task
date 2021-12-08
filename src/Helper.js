import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import ProductFile from "./ProductFile";

const Helper = () => {
  const [getData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log("api", result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="card-s">
        {getData.map((scard) => {
          return (
            <ProductFile
              product_name={scard.product_name}
              brand_name={scard.brand_name}
              discription={scard.discription}
              price={scard.price}
              date={scard.date}
              image={scard.image}
              state={scard.address.state}
              city={scard.address.city}
            />
          );
        })}
      </div>
    </>
  );
};

export default Helper;
