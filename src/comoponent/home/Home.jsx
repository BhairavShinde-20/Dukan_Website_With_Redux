import React from "react";
import bg from "../img/bg.jpg";
import Product from "../product/Product";
const Home = () => {

  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark">
          <img src={bg} className="card-img" alt="banerimg" height="540px" />
          <div className="card-img-overlay d-flex flex-column text-secondary">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 ">
                NEW SEASON ARRIVAILS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>

        <Product/>
      </div>
    </>
  );
};

export default Home;
