import React, { useState } from "react";
import Tshirt from "../img/alexander-mcqueen-skull-tee-1.jpg";
import FrogImg from "../img/Gucci-Pre-Fall-2020-metalmagazine-12.jpg";

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
      <div className="section-about">
        <img className="image-box" src={FrogImg} alt="imagen shirt" />
        <h1>
          ABOUT <span>US</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          architecto explicabo accusamus necessitatibus illo amet vero quasi
          quos rerum pariatur, sed in quo eveniet quas. Repellat voluptates
          praesentium saepe deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae, architecto explicabo accusamus
          necessitatibus illo amet vero quasi quos rerum pariatur, sed in quo
          eveniet quas. Repellat voluptates praesentium saepe deserunt.
        </p>
      </div>

      <div className="section-top">
        <h1>AW/20 SHOP</h1>
        <p>All, Apparel</p>
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
      <footer className="footer">
        <p>&#169; nadiamariduena 2020</p>
      </footer>
    </React.Fragment>
  );
};
// BEFORE REDUX------
// export default Home;
// --------------------
//
// after redux you will have to put the Home inside the parenthesis
export default connect(null, { addBasket })(Home);
