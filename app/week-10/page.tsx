"use client"
import  Button  from 'next'
import React, { useEffect, useState } from 'react'
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';



const page = () => {
    const [isLoggedin, setIsLoggedIn] = useState<boolean>(false)
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(()=>{
        if(user){
            setIsLoggedIn(true)
        }else{

        }},[user])

    const signIn = async () => {
        await gitHubSignIn();
    }
    const signOut = async () => {
        await firebaseSignOut();
        setIsLoggedIn(false);
    }
    // use IF to validate object
useEffect(()=>{if(user)console.log(user.displayName)},[user])

    return (
    <div className="flex flex-col place-items-center bg-cyan-900">
        <button
          className={`place-items-center text-blue-950 border-2 bg-blue-300 border-orange-400 m-2 p-1`}
          id="loginButton"
          type="button"
          onClick={signIn}
        >
          Sign In With GitHub
        </button>
        <div>
            {isLoggedin && <p>Hello {user && user.displayName}!</p>}
        </div>
        <button
          className={`place-items-center text-blue-950 border-2 bg-blue-300 border-orange-400 m-2 p-1`}
          id="loginButton"
          type="button"
          onClick={signOut}
        >
            Sign Out
        </button>
        <div className="flex flex-row place-content-evenly">
          {isLoggedin && <a href="week-8/shopping-list"><u>Your Shopping List</u></a>}
        </div>
        <Link className="" href="/"><u>Home</u></Link>
     </div>
  )
}

export default page

