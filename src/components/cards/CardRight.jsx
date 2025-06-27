import React from 'react'

function CardRight() {
  return (
    <div className='flex flex-col md:w-[50%] w-full border-2 bg-[#f5eabf] border-dotted border-amber-300 mt-4 rounded-2xl p-2 md:ml-6' >
        <div id="title">
            <h2 className='md:text-6xl text-4xl font-semibold bg-amber-200 w-fit rounded-3xl pt-1 pb-1 pr-2 pl-2' >Why is this better?</h2>
        </div>
        <div className="ans mt-4">
            <p className='md:text-xl text-left md:leading-7 '>The Basic concept of socializing or having genuine connections with people is repeated interaction and close proximity. But in other platforms you are given a lot of accounts and content and get lost with whom to connect with. But here you only have limited number of people and you will have limited interactions with them and thereby get connected easily</p>
        </div>
    </div>
  )
}

export default CardRight