import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Card from "./Card";

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card 
        img="src/assets/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> 
    </div>
  );
}
