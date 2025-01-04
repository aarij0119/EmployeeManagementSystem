import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-12'>
    <div>
        <h1 className='text-white text-3xl font-bold'>Hello <span className='block mt-1 text-4xl'>Aarij 👋🏼</span> </h1>
    </div>
    <div>
        <button className='bg-orange-700 p-1.5 px-3 font-semibold text-white rounded-sm'>Log Out</button>
    </div>
</div>
  )
}

export default Header