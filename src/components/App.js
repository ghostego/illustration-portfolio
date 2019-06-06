import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Gallery from "./views/Gallery";
import Image from "./views/Image";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/gallery/:id" exact component={Image} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
