import React from 'react'
import notFoundImag from "../assets/2634442.jpg"
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

  const navigate = useNavigate();

  const goTo = ()=>{
    navigate('/')
  }


  return (
    <div className='bg-[#E9FCFF] min-h-screen flex justify-center items-center'>
      
     <div className='flex flex-col items-center gap-2'>
      <img className='rounded-2xl w-96' src={notFoundImag} alt="404_Image" />
      <h1 className='font-black text-9xl text-opacity-60 text-cyan-500' >Page Not Found</h1>
      <button className='bg-cyan-500 px-6 border rounded-lg py-3 text-lg text-white font-medium mt-5' onClick={goTo}  >Back to Home</button>
     </div>
  
    </div>
  )
}

export default NotFoundPage