import React from 'react'

function Waiting() {
  return (
    <div className="waiting flex flex-col m-4  items-center  md:w-[65%] rounded-3xl " >
        <div className="title flex pt-4 pb-4 pr-4 pl-4 ">
            <h1 className='md:text-5xl text-4xl text-[#FFCCAA] ' >Connecting Soon.....</h1>
        </div>
        <div className="content flex flex-col items-center justify-center">
            <h2 className='md:text-xl pt-2 pb-1 ' >The official Closed-connections platform is under production</h2>
            <p className='md:text-xl pt-1 pb-3 ' >It will soon serve as a platform for you to socialize and connect with people</p>
        </div>
    </div>
  )
}

export default Waiting