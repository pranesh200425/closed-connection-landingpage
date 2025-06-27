import React from 'react'

function Count() {
  return (
    <div className='flex flex-col w-1/2 items-center border-2 border-dotted border-[#FFCCAA] rounded-4xl ' >
        <div className='flex' >
            <span className='text-7xl text-[#FFCCAA]' >0</span>
        </div>
        <div>
            <h2>Are waiting to be connected</h2>
        </div>
        <div>
            <button>
                Want to get connected
            </button>
        </div>
    </div>
  )
}

export default Count