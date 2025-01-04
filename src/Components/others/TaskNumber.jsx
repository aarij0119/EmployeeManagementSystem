import React from 'react'

const TaskNumber = () => {
  return (
    <>
   <div className='flex flex-wrap gap-3 pb-10'>
   <div className='w-[24%] bg-red-500 p-6 rounded-xl'>
        <h1 className='text-2xl font-bold text-white'>0</h1>
        <h1 className='text-2xl font-semibold text-white'>New Task</h1>
    </div>
    <div className='w-[24%] bg-blue-500 p-6 rounded-xl'>
        <h1 className='text-2xl font-bold text-white'>0</h1>
        <h1 className='text-2xl font-semibold text-white'>New Task</h1>
    </div>
    <div className='w-[24%] bg-green-500 p-6 rounded-xl'>
        <h1 className='text-2xl font-bold text-white'>0</h1>
        <h1 className='text-2xl font-semibold text-white'>New Task</h1>
    </div>
    <div className='w-[24%] bg-yellow-500 p-6 rounded-xl'>
        <h1 className='text-2xl font-bold text-white'>0</h1>
        <h1 className='text-2xl font-semibold text-white'>New Task</h1>
    </div>
   </div>
    </>
  )
}

export default TaskNumber