import React from 'react'
import "./Mdashes.css"
import img1 from "../assets/1stbrgr.png"
import img2 from "../assets/salad.png"
import img3 from "../assets/ice.png"
import Menucard from './Menucard'
export const Mdashes = () => {
  return (
    <div className='dashes'>
<Menucard img1={img1} title=" multed cheese" price="$ 5.3" className="card"/> 

<Menucard img1={img2} title="Greek salad" price="$ 7" className="card"/>

<Menucard img1={img3} title="special qulfee" price="$ 3" className="card"/>
    </div>
  )
}
