import React from 'react'
import TaskNumber from '../others/TaskNumber'
import Tasklist from '../Tasklist/Tasklist'
import Header from '../others/Header'

const Employee = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-900 p-6'>
                <Header />
                <TaskNumber />
                <Tasklist />
            </div>
        </>
    )
}

export default Employee
