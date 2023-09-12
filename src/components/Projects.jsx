import React from 'react'
import projectElements from './Project-elements'

function Projects() {
  return (
    <div className=''>
      <ul className='grid grid-cols-3 gap-4'>
        {
          projectElements.map((eachObj)=>{
            const{id,title,descp,link}=eachObj;
            return(
              <li key={id} className=' max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover: ring-1' >
                <a href="#">
                <img className=" rounded-t-lg"src={link} alt="" />
                </a>
                
                <h5 className='mb-2 text-2xl font-primary tracking-tight text-gray-700 dark:text-white'>{title}</h5>
                <p className='captialize mb-3 font-thin
                 text-gray-700 dark:text-gray-400'>{descp}</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>

              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Projects