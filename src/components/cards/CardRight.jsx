import React from 'react'

function CardRight() {
  return (
    <div className='flex flex-col w-[50%] border-2 bg-[#f5eabf] border-dotted border-amber-300 rounded-2xl p-2 ml-6' >
        <div id="title">
            <h2 className='text-6xl font-semibold bg-amber-200 w-fit rounded-3xl pt-1 pb-1 pr-2 pl-2' >Why is this better?</h2>
        </div>
        <div className="ans mt-4">
            <p className='text-xl text-left leading-7 ' >You might be wondering how is this not another social media platform that just consumes your time. Other social media platforms have very large contents and community. But Closed Connections just let's you interact with only a group of people. Hey! smarty pants don't jump into conclusion about how is different from a char application. Here you dont't choose the circle but the circle is random</p>
        </div>
    </div>
  )
}

export default CardRight