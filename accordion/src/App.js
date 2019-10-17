import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Accordion from "./Accordion";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/accordion" component={Accordion} />
          <Route path="/shop/:id" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
