import React from 'react'
import Header from '../others/Header'

const Admin = () => {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 p-6'>
    <Header />
    <div className='flex justify-between gap-7 bg-zinc-800 p-4'>
        <div className='flex justify-center  flex-col gap-1.5 w-1/3 p-4'>
            <label className='text-white text-md font-bold'>Task Title</label>
            <input
            className='outline-none p-2 rounded-lg bg-transparent border-2 border-white text-white' 
            type="text" 
            placeholder='Make a UI design' />
            <label className='text-white text-md font-bold'>Date</label>
            <input 
            className='outline-none p-2 rounded-lg bg-transparent border-2 border-white text-white' 
            type="date" />
            <label className='text-white text-md font-bold'>Asign to</label>
            <input 
            className='outline-none p-2 rounded-lg bg-transparent border-2 border-white text-white'
            type="text"
             placeholder='Employee name' />
            <label className='text-white text-md font-bold'>Category</label>
            <input
            className='outline-none p-2 rounded-lg bg-transparent border-2 border-white text-white'
             type="text" 
             placeholder='Design, dev, etc.' />
        </div>
        <div className='w-1/3 p-4 flex flex-col'>
            <label className='text-white mb-2'>Description</label>
            <textarea 
            className='text-white bg-transparent rounded border-2 border-white outline-none h-full mb-4 p-2' />
            <button className='bg-emerald-700 p-2 rounded text-white text-md font-bold'>Create Task</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Admin