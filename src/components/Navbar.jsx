import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className=" h-20 w-screen flex justify-center items-center bg-purple-500 p-3">
          <div className="h-full w-[95%] flex font-extrabold">
            <div className="h-full w-[50%] flex  items-center justify-center p-3 text-2xl text-white shadow-md">
              <h1>Manickam S</h1>
            </div>
            <div className="h-full w-[50%] flex flex-row items-center justify-center text-white ">
              <div className="w-1/3 h-full flex items-center justify-center p-3 shadow-md  hover:bg-purple-400 gap-2">
                <Link to={'/'}>
                  <button>Profile</button>
                </Link>
              </div>
                <div className="w-1/3 h-full flex items-center justify-center p-3 shadow-md  hover:bg-purple-400 gap-2">
                  <Link to={'/projects'}>
                    <button>Projects</button>
                  </Link>
                </div>
                <div className="w-1/3 h-full flex items-center justify-center p-3 shadow-md  hover:bg-purple-400 gap-2">
                  <Link to={'contact'}>
                    <button>Contact</button>
                  </Link>
                </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;