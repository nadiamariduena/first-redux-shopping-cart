import React, { useState } from "react";
import Tshirt from "../img/alexander-mcqueen-skull-tee-1.jpg";

// import AnotherOption from "../img/alexander-mcqueen-skull-tee-1.jpg";
// after you have created all what is in the tutorial you will add the line below, to connect REDUX with this component "the home we all the buttons are", connect is going to connect the whole set-up that we created new files in new folders.
import { connect } from "react-redux";
// here below you will import add to basket:  the function "addBasket" in the file addAction.js
import { addBasket } from "../actions/addAction";

const Home = (props) => {
  console.log(props);

  // ----------------------
  return (
    <React.Fragment>
      <div className="section-top">
        <div className="container">
          <div className="image">
            <img src={Tshirt} alt="imagen shirt" />
            <h3>Skull T-shirt</h3>
            <h4>$15,00</h4>
            <a onClick={props.addBasket} className="addToCart " href="#">
              Add to Cart
            </a>
          </div>
          {/* ----------------------- */}
          <div className="image">
            <img src={Tshirt} alt="imagen shirt" />
            <h3>Skull T-shirt</h3>
            <h4>$15,00</h4>
            <a onClick={props.addBasket} className="addToCart" href="#">
              Add to Cart
            </a>
          </div>
          {/* ----------------------- */}
          <div className="image">
            <img src={Tshirt} alt="imagen shirt" />
            <h3>Skull T-shirt</h3>
            <h4>$15,00</h4>
            <a onClick={props.addBasket} className="addToCart" href="#">
              Add to Cart
            </a>
          </div>
          {/* ----------------------- */}
          <div className="image">
            <img src={Tshirt} alt="imagen shirt" />
            <h3>Skull T-shirt</h3>
            <h4>$15,00</h4>
            <a onClick={props.addBasket} className="addToCart" href="#">
              Add to Cart
            </a>
          </div>
          {/* ----------------------- */}
          {/* ----------------------- */}
          {/* ----------------------- */}
        </div>
      </div>
      {/* -------------------new section--------------------------- */}
      <div className="section-result">
        <h1>Current Numbers in Cart </h1>
      </div>
    </React.Fragment>
  );
};
// BEFORE REDUX------
// export default Home;
// --------------------
//
// after redux you will have to put the Home inside the parenthesis
export default connect(null, { addBasket })(Home);
