import React, { useState, useEffect } from "react";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Appcontainer/Home";
import About from "./Aboutcontainer/About";
import Error from "./Error";
import BlogDetails from "./BlogDetails";
import { keepTheme } from "./themes";
import MainServices from "./Servicescontainer/MainServices";
import BlogPage from "./BlogPage";

function App() {
  AOS.init({
    duration: 1500,
  });

  useEffect(() => {
    keepTheme();
  });

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/OurServices" component={MainServices} />
        <Route path="/Ourblogs" component={BlogPage} />
        <Route path="/blogDetail/:Title" exact component={BlogDetails} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
