import React from "react";
import Navigation from "./components/Navigation-bar";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store.js";

//
//
function App() {
  return (
    // Provider will wrap all the components
    // then i will pass a property call: store
    // the value of store that is in the store.js
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
