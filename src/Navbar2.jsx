import React from 'react';
import navbarElements from './Elements'
import {NavLink} from 'react-router-dom'

function Navbar2() {
  return (<>

    <nav className="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-primary text-blue-500">Portfolio</h3>
        </div>
        <div className="space-x-8 font-['Poppins']">
          {
              navbarElements.map((eachObj)=>{
                const {id,title,href}=eachObj;
                return (
                  <>
                    <NavLink to={href} className={({ isActive }) =>
                      isActive ? "text-white font-bold bg-blue-500 px-6 py-1 rounded-md" : ""
                    }>{title}</NavLink>
                  </>
           )
          })
        }
        </div>
      </nav>
  </>
    
  )
}

export default Navbar2