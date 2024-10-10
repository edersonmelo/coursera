import React from "react"
import "./Hero.css"
import waiter from "../assets/waiter.jpeg"
import Button from './Button'
const Hero = () => {
  return (
    <>
    <div className='hero'>
      <div className="heroleft">
       <h1>Little Lemon</h1>
       <h3>Islamabad</h3> 
       <p>We are a family owned mediterranean resturant, focus on traditional recipes served with a modern twist.</p>
       <Button/>
      </div>
      <div className="heroright"><img src={waiter} alt='waiter img' className="waiterimg"/></div>
      
    </div>
    <div className="herobottom">
      <h1>This week specials !</h1>
      <button className="butt">Online Menu</button>
    </div>
    </>
  )
}

export default Hero