import React from 'react'
import navbarElements from './Elements'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (<>
  <div className='flex align-middle'>
    <ul className='flex  '>
      <button className='px-6 py-1 font-primary rounded-md bg-blue-500 text-white hover:px-40 translate-x-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
        Portfolio</button>
    </ul>
    <ul className="flex justify-middle flex-row gap-6 p-3 font-['Poppins']">
    {
      navbarElements.map((eachObj)=>{
        const {id,title,href}=eachObj;
        return (
          <li key={id} className='captialize '>
            <NavLink to={href} className={({ isActive }) =>
              isActive ? "text-white font-bold bg-blue-500 px-6 py-1 rounded-md" : ""
            }>{title}</NavLink>
          </li>
        )
      })
    }
    </ul>
    </div>
    </>
  )
}

export default Navbar;