import React from "react";
import ReactLogo from "./assets/react-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} alt="React Logo" className="nav-img"/>
      <h2 className="nav-title">ReactFacts</h2>
      <h3 className="nav-project">React Course - Project 1</h3>
    </nav>
  );
}
