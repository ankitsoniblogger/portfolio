import React from "react";
import "./common.css";
import Header from "./common/Header";

const App = () => {
  return (
    <div className="h-screen md:p-8 p-4 bg-hero-pattern md:bg-custom bg-center bg-repeat">
      <Header />
    </div>
  );
};

export default App;
