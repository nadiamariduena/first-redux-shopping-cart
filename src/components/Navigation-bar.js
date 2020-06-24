import React from "react";
import { connect } from "react-redux";
//
function Navigation() {
  return (
    <header>
      <div className="overlay"> </div>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="home.html">About</a>
          </li>
          <li className="cart">
            <a href="home.html">
              <ion-icon name="basket-outline"></ion-icon>
              Cart <span>0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
// ----------------------
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  // the basketState is coming from the index.js
});

// export default Navigation;
export default connect(mapStateToProps, { addBasket })(Navigation);
