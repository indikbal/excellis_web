import React, { useState, useEffect } from "react";
import "../src/Appcontainer/assets/Style.css";
import "./lighttheme.css";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
import Process from "./Processcontainer/Process";
import PrivacyPolicy from "./Othercontainer/PrivacyPolicy";
import TermConditions from "./Othercontainer/TermConditions";
import ContactUs from "./Othercontainer/ContactUs";
import ItServices from "./ItServices/ItServices";
import MobileApplication from "./ItServices/MobileApplication";
import SoftwareDevelopment from "./ItServices/SoftwareDevelopment";
import UiUxDesign from "./ItServices/UiUxDesign";
import WebDevelopment from "./ItServices/WebDevelopment";
import PartnerWithUs from "./Othercontainer/PartnerWithUs";
import Portfolio from "./Othercontainer/Portfolio";
import QaAndTesting from "./ItServices/QaAndTesting";
import BackOfficeProcessOutsourcing from "./BpoServices/BackOfficeProcessOutsourcing";
import SearchEngineOptimization from "./MarketingServices/SearchEngineOptimization";
import SocialMediaMarketing from "./MarketingServices/SocialMediaMarketing";

function App() {
  AOS.init({
    duration: 1500,
    once: "true",
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
        <Route path="/process" component={Process} />
        <Route path="/Ourblogs" component={BlogPage} />
        <Route path="/blogDetail/:Title" exact component={BlogDetails} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-condition" component={TermConditions} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/itServices" component={ItServices} />
        <Route path="/mobile-application" component={MobileApplication} />
        <Route path="/software-development" component={SoftwareDevelopment} />
        <Route path="/ui-ux-design" component={UiUxDesign} />
        <Route path="/web-development" component={WebDevelopment} />
        <Route path="/partner-with-us" component={PartnerWithUs} />
        <Route path="/QA-testing" component={QaAndTesting} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route
          path="/search-engine-optimization"
          component={SearchEngineOptimization}
        />
        <Route
          path="/social-media-marketing"
          component={SocialMediaMarketing}
        />
        <Route
          path="/back-office-process-outsourcing-services"
          component={BackOfficeProcessOutsourcing}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
