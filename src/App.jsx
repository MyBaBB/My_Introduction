// eslint-disable-next-line no-unused-vars
import React from "react";

// import Sidenav from "./components/Sidenav";
import TopSection from "./components/TopSection";
import SecondSection from "./components/SecondSection";
import CopyRight from "./components/Copyright";

import Footer from "./components/Footer";

import Header from "../src/components/HeaderFolder/Header";
const App = () => {
  return (
    <div className="relative bg-color-red-500  w-screen h-screen">
      <div className="relative flex-row m-auto border-2 border-red-500">
      
        <Header />

        <TopSection />
        <SecondSection />

        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
