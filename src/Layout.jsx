import React from 'react'
import hero from './hero-1.png';


function Layout() {
  return (
  <div className="h-200 bg-gradient-to-r rounded-md from-blue-100 via-blue-200 to-gray background-animate">
    <div className='container mx-auto flex px-3 py-3 items-center justify-center flex-col'>
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded-full ring-2 ring-white shadow-xl" src={hero} alt="" />
    </div>
    <div className=' w-full h-full flex justify-center '>
      <div className='my-3'>
        <div className="font-['Poppins'] text-slate-500 text-center text-2xl
        ">Hi,I'm Reesu Jagan👋
        </div>
        <div className="font-primary tracking-tight text-center text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5"
          >FULL STACK AI DEVELOPER.
        </div>
        <div className="px-5 capitalize">
          <p className=' font-primary text-xl text-slate-500 px-3'>
          A passionate
          </p>
          <a href="#" className='font-5xl font-bold text-white hover:text-indigo-600'>Frontend / Fullstack- web developer/Data scientist
          </a>
          
          </div>
        </div>
    </div> 
    </div>
  )
}

export default Layout