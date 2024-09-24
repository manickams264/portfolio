import React from 'react'
import x from '../assets/img/714022202030-min.jpg'
import Navbar from '../components/Navbar'
const Profile = () => {
  return (
    <>
      <div className="w-screen flex ">
        <div className='w-[70%] h-80 flex justify-center items-center bg-stone-400  py-5'>
          <div className="w-full h-[50%] flex text-4xl text-white font-extrabold justify-center items-center rounded-lg bg-purple-500 p-3 b">
            Hi i am Manickam S
          </div>
        </div>
        <div className="w-[30%] h-80 flex justify-center items-center  bg-stone-400 ">
          <img src={x} alt="profile" className="rounded-full h-72 w-72" />
        </div>
      </div>
      <div className="w-screen bg-stone-400 flex">
        <div className="h-40 w-[90%] flex text-2xl font-bold text-white rounded-lg justify-center items-center p-2 bg-purple-500">
          I am an aspiring MERN stack developer with a passion for building dynamic and responsive web applications. Proficient in MongoDB, Express.js, React, and Node.js, I enjoy creating seamless user experiences while leveraging the power of JavaScript throughout the entire development process.
        </div>
        <div className="w-[10%] flex bg-stone-400">
        </div>
      </div>
      <div className="h-12 w-screen flex bg-stone-400">
      </div>
    </>
  )
}

export default Profile