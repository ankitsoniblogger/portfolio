import React from "react";
import "./common.css";
import Header from "./common/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="h-screen md:p-8 p-4 bg-hero-pattern md:bg-custom bg-center bg-repeat">
      <Header />
      <Home />
    </div>
  );
};

export default App;
