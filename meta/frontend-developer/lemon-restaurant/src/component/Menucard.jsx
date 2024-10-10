import React from 'react'
import "./Menucard.css"
const Menucard = (props) => {
  return (
    <div className='menucard'>
      <img src={props.img1} alt='menu1' className='menuimg'/>
      <div className="card-description">
      <div className='menu1'><h3>{props.title}</h3>
      <p style={{color:"orange"}}>{props.price}</p></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae esse ab eius explicabo soluta officia</p>
      <button className='butt'>Order Delivery</button>
      </div>
    </div>
  )
}

export default Menucard