import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Job from "./pages/job";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/job" component={Job} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
