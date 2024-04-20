// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
// import Header from "./components/Header";
// import Sidenav from "./components/Sidenav";
import TopSection from "./components/TopSection";
import SecondSection from "./components/SecondSection";
import CopyRight from "./components/Copyright";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarFolder/Navbar";
const App = () => {
  return (
    <div className="relative flex h-full w-screen items-center justify-center  ">
      <div>
        {/* <Sidenav /> */}

        {/* <Header /> */}
        <Navbar />
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
