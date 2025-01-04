import React, { useState } from 'react'

const Login = ({handLelogin}) => {
    const [Password,setPassword] = useState('');
    const[Email,setEmail] = useState('')
    const submithandler = (e) =>{
        e.preventDefault();
        console.log({password:Password, emial:Email});
        handLelogin(Email,Password)
        setPassword('')
        setEmail('')
       
    }
    return (
        <>
            <div className='w-full h-screen bg-zinc-900'>
                <div className='w-full h-screen flex items-center justify-center'>
                    <form onSubmit={submithandler} className='flex flex-col gap-5 md:w-4/12  w-1/2 border-2 p-8 border-emerald-700 rounded-lg'>
                        <h1 className='text-center text-xl font-bold text-white'>Login</h1>
                        

                        <input
                            className='p-3 bg-zinc-800 rounded-3xl outline-none text-white'
                            type='email'
                            placeholder='Email'
                            required
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)} />
                            <input
                            className='p-3 bg-zinc-800 rounded-3xl outline-none text-white'
                            type='password'
                            placeholder='Password'
                            required
                            value={Password}
                            onChange={(e)=> setPassword(e.target.value)} />
                        <button
                            className='bg-emerald-700 p-2 rounded-3xl text-lg text-white font-bold hover:bg-emerald-800'>
                            Log In
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login