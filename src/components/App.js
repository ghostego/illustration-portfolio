import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Gallery from "./views/Gallery";
import Sidebar from "./Sidebar";
import createBrowserHistory from "../history";

const App = () => {
  return (
    <div>
      <Router history={createBrowserHistory}>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/gallery/:id" exact component={Gallery} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
