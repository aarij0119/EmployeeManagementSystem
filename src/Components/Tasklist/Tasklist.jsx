import React from 'react'
import '../../App.css'

const Tasklist = () => {
  return (
    <>
      <div id='tasks' className='flex gap-4 overflow-x-auto  h-[40%] p-2 w-full'> {/* Ensuring horizontal scrolling */}
        <div className='bg-red-500 p-5 min-w-[350px] rounded-lg'> {/* Added min-width */}
          <div className='flex justify-between items-center pb-4'>
            <h1 className='bg-red-600 p-1 px-4 text-white font-bold rounded-md'>High</h1>
            <h1 className='text-white text-md font-bold'>1 Jan 2025</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white pb-3'>Make a youtube video</h1>
            <p className='text-sm font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere non, laborum adipisci iure nobis dignissimos sit ducimus id possimus deserunt aspernatur quisquam nisi delectus dolorum temporibus eos fuga!</p>
          </div>
        </div>
        <div className='bg-green-500 p-5 min-w-[350px]  rounded-lg'> {/* Added min-width */}
          <div className='flex justify-between items-center pb-4'>
            <h1 className='bg-red-600 p-1 px-4 text-white font-bold rounded-md'>High</h1>
            <h1 className='text-white text-md font-bold'>1 Jan 2025</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white pb-3'>Make a youtube video</h1>
            <p className='text-sm font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere non, laborum adipisci iure nobis dignissimos sit ducimus id possimus deserunt aspernatur quisquam nisi delectus dolorum temporibus eos fuga!</p>
          </div>
        </div>
        <div className='bg-blue-500 p-5 min-w-[350px]  rounded-lg'> {/* Added min-width */}
          <div className='flex justify-between items-center pb-4'>
            <h1 className='bg-red-600 p-1 px-4 text-white font-bold rounded-md'>High</h1>
            <h1 className='text-white text-md font-bold'>1 Jan 2025</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white pb-3'>Make a youtube video</h1>
            <p className='text-sm font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere non, laborum adipisci iure nobis dignissimos sit ducimus id possimus deserunt aspernatur quisquam nisi delectus dolorum temporibus eos fuga!</p>
          </div>
        </div>
        <div className='bg-yellow-400 p-5 min-w-[350px]  rounded-lg'> {/* Added min-width */}
          <div className='flex justify-between items-center pb-4'>
            <h1 className='bg-red-600 p-1 px-4 text-white font-bold rounded-md'>High</h1>
            <h1 className='text-white text-md font-bold'>1 Jan 2025</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white pb-3'>Make a youtube video</h1>
            <p className='text-sm font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere non, laborum adipisci iure nobis dignissimos sit ducimus id possimus deserunt aspernatur quisquam nisi delectus dolorum temporibus eos fuga!</p>
          </div>
        </div> 
        <div className='bg-green-500 p-5 min-w-[350px]  rounded-lg'> {/* Added min-width */}
          <div className='flex justify-between items-center pb-4'>
            <h1 className='bg-red-600 p-1 px-4 text-white font-bold rounded-md'>High</h1>
            <h1 className='text-white text-md font-bold'>1 Jan 2025</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white pb-3'>Make a youtube video</h1>
            <p className='text-sm font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere non, laborum adipisci iure nobis dignissimos sit ducimus id possimus deserunt aspernatur quisquam nisi delectus dolorum temporibus eos fuga!</p>
          </div>
        </div>        
      </div>
    </>
  )
}

export default Tasklist
