import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./page";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
