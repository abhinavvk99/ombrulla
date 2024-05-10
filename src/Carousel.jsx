import React from 'react'
import Marquee from "react-fast-marquee";
import burger from './img/burger-king.webp'
import emirates from './img/emirates.webp'
import wildleaf from './img/wild-leaf.85d7f76f_Z1vakWD.webp'
import dubai from './img/dubai-festival-city.webp'
import best from './img/best-western.webp'
import azelit from './img/azelit.webp'
import suja from './img/suja.webp'
import planet from './img/planet-fitness.webp'
import damac from './img/damac.webp'

export const Carousel = () => {
  return (
    <div>
        <Marquee gradient={true} direction="right">
            <div>
                <img src={burger} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={emirates} alt="emirates" className=' w-60  p-9' />
            </div>
            <div>
                <img src={wildleaf} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={dubai} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={best} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={azelit} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={suja} alt="burger" className=' w-60 p-9' />
            </div>
            <div>
                <img src={planet} alt="burger"  className=' w-60 p-9'/>
            </div>
            <div>
                <img src={damac} alt="burger" className=' w-60 p-9' />
            </div>
        </Marquee>
    </div>
  )
}
