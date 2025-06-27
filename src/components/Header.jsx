import React from 'react'

function Header() {
  return (
    <header className='flex md:w-[80%] w-full text-nowrap items-center justify-center rounded-3xl m-4 min-h-[5rem]  p-5' >
        <p className='flex flex-col w-full justify-center' >
            {/* <span className='text-center md:text-5xl text-[1.35rem] font-bold tracking-widest ' >Welcome to <span className='inline- font-bold
      bg-gradient-to-r from-[#DAB4E5] via-[#F0CA86]  to-[#9AD7A4]
      bg-clip-text text-transparent' id='text-gradient' > Closed-Connections</span></span> */}
            <span className='flex justify-center mt-8 underline text-center md:text-3xl text-xl md:leading-16 leading-10 ' >
                A corner of internet where <br></br>
                You don't get ovewhelmed,<br></br> 
                No micro form content to consume time,<br></br>
                Won't make you feel anxious or stressed,<br></br>
                A great place to SOCIALIZE
            </span>
        </p>
    </header>
  )
}

export default Header