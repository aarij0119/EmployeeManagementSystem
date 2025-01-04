import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import Alltasks from '../others/Alltasks'

const Admin = () => {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 p-6'>
    <Header />
    <CreateTask />
    <Alltasks />
    </div>
    </>
  )
}

export default Admin