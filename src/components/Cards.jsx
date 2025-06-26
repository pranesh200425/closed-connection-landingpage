import React from 'react'
import Cardleft from './cards/cardleft'
import CardRight from './cards/CardRight'



function Cards() {
  return (
    <>
    <div id='cards' className='flex flex-col m-4 w-full p-9' >
      {/* <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a> */}
        <div className="flex flex-col card-left items-end">
            <Cardleft />
        </div>
        <div className="card-right flex flex-col justify-center ">
            <CardRight />
        </div>
    </div>
    </>
  )
}

export default Cards