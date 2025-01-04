import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from '../src/utils/Localstorage'

const App = () => {
  const [user, setUser] = useState(null);
  const handLelogin = (email, password) => {
    if (email === "admin@gmail.com" && password === '123') 
      {
      setUser('Admin');
      console.log(user)
    }
     else if (email === 'user@gmail.com' && password === '123') 
      {
      setUser("User");
      console.log(user)
    } 
    else {
      alert("Invalid Credentials");
    }
  }
  // useEffect(() => {
  //     if(user){
  //       console.log(user)
  //     }
  //     } )



  return (
    <>
      {!user ? <Login handLelogin={handLelogin} /> : ''}
      {user === "Admin" ? <Admin /> : <Employee />  }
      {/*  */}
    </>
  )
}

export default App