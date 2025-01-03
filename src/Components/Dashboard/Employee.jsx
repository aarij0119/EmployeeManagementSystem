import React from 'react'
import TaskNumber from '../others/TaskNumber'

const Employee = () => {
  return (
   <>
   <div className='w-full h-screen bg-zinc-900 p-6'>
    <div className='flex justify-between items-center mb-12'>
        <div>
            <h1 className='text-white text-3xl font-bold'>Hello <span className='block mt-1 text-4xl'>Aarij 👋🏼</span> </h1>
        </div>
        <div>
            <button className='bg-orange-700 p-1.5 px-3 font-semibold text-white rounded-md'>Log Out</button>
        </div>
    </div>
    <TaskNumber />
   </div>
   </>
  )
}

export default Employee