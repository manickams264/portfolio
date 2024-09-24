import React from 'react'
import Navbar from '../components/Navbar'
import y from '../assets/img/Picture1.png'
import z from '../assets/img/Screenshot 2024-09-21 012821.png'
import a from '../assets/img/projectimage.jpg'
const Projects = () => {
  return (
    <>
    <div className="w-screen h-36 flex  items-center bg-stone-400">
      <div className="w-[80%] h-[50%] flex justify-center rounded-lg items-center text-3xl text-white font-extrabold bg-purple-500">
        My Projects has been displayed below
      </div>
    </div>
    <div className="h-96 w-screen flex flex-row justify-center items-center bg-stone-400 gap-8">
      <div className="h-[90%] w-80 flex-col bg-purple-500 rounded-lg p-2">
        <div className="h-[50%] w-full flex ">
          <img src={y} alt="project1" className='rounded-lg' />
        </div>
        <div className='flex text-white font-bold'>
          Our restaurant automation platform streamlines operations by integrating order management, inventory tracking, and payment processing. Designed for efficiency, it reduces manual tasks and enhances customer experience through seamless automation.
        </div>
      </div>
      
      <div className="h-[90%] w-80 flex flex-col rounded-lg bg-purple-500 p-2">
        <div className="h-[50%] w-full flex ">
          <img src={z} alt="project2" className='rounded-lg' />
        </div>
        <div className='flex text-white font-bold'>
        The autocorrector project corrects misspelled words by suggesting the closest valid alternatives. It uses similarity algorithms, like edit distance, to compare input words with a dictionary. This improves text accuracy and user efficiency.
        </div>
      </div>
      <div className="h-[90%] w-80 flex flex-col rounded-lg bg-purple-500 p-2">
        <div className="h-[50%] w-full flex ">
          <img src={a} alt="project3" className='rounded-lg w-full' />
        </div>
        <div className='flex text-white font-bold'>
          A real-time image animation project transforms static images into animated visuals instantly. It uses machine learning and computer vision techniques for dynamic motion generation.
        </div>
      </div>
    </div>
    </>
  )

}

export default Projects