import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
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
