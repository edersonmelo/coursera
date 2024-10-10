import React from "react";
import "./App.css"
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import { Mdashes } from "./component/Mdashes";
import Booking from "./component/Booking";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Mdashes/>
      <Booking/>
    </div>
  )
}

export default App