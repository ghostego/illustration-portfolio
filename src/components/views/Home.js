import React from "react";
import ContentBackground from "../ContentBackground";

const Home = () => {
  return (
    <>
      <ContentBackground />
      <div className="home__container">
        <img src="/images/selfie.png" className="self-portrait" />
      </div>
    </>
  );
};

export default Home;
