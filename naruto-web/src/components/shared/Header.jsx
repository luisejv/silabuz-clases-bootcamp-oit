import React from "react";

const Header = () => {
  return (
    <header>
      <div className="overlay"></div>
      <video
        className="w-100"
        src="./assets/img/naruto.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="container h-100">
        <div className="d-flex h-100 flex-column align-items-center justify-content-center text-white">
          <h1 className="display-3">Naruto Web</h1>
          <p>Toda la información sobre Naruto Shippuden</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
