import React, { lazy, Suspense } from "react";

import { Footer } from "./container";
import { Navbar } from "./components";
import "./App.css";

const Intro = lazy(() => import("./container/Intro/Intro"));
const AboutUs = lazy(() => import("./container/AboutUs/AboutUs"));
const Chef = lazy(() => import("./container/Chef/Chef"));
const FindUs = lazy(() => import("./container/Findus/Findus"));
const Gallery = lazy(() => import("./container/Gallery/Gallery"));
const Header = lazy(() => import("./container/Header/Header"));
const Laurels = lazy(() => import("./container/Laurels/Laurels"));
const SpecialMenu = lazy(() => import("./container/Menu/SpecialMenu"));

const App = () => (
  <div>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </Suspense>
    <Footer />
  </div>
);

export default App;
