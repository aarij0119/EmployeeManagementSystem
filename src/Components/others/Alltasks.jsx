import React from 'react'
import  '../../App.css'

const Alltasks = () => {
  return (
    <div id='tasks' className='bg-[#000000f9] rounded p-4 overflow-y-auto h-64'>
        <div className='bg-red-400 p-4 mb-3 flex items-center justify-between text-white text-md font-bold rounded'>
            <h2>Aarij</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-400 p-4 mb-3 flex items-center justify-between text-white text-md font-bold rounded'>
            <h2>Aarij</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 p-4 mb-3 flex items-center justify-between text-white text-md font-bold rounded'>
            <h2>Aarij</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-green-400 p-4 mb-3 flex items-center justify-between text-white text-md font-bold rounded'>
            <h2>Aarij</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default Alltasks