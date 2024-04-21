// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";

// import Sidenav from "./components/Sidenav";
import TopSection from "./components/TopSection";
import SecondSection from "./components/SecondSection";
import CopyRight from "./components/Copyright";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";

import Header from "../src/components/HeaderFolder/Header";
const App = () => {
  return (
    <div className="relative flex h-full w-screen items-center justify-center  ">
      <div>
        {/* <Sidenav /> */}

        {/* <Header /> */}
        <Header />

        <TopSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
