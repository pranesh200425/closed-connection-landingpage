import React from 'react'

function Footer() {
  return (
    <div className='flex w-full justify-center md:border-t-0 border-black border-t items-center p-4' >
        <div className='flex justify-center items-center' >
            <h1 className='text-2xl pr-4 '>Closed Connections</h1> 
            <span>&#169;</span>
            <p className='pl-4' >2025</p>
        </div>
    </div>
  )
}

export default Footer