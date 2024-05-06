import React, { useState } from 'react'
import Login from './Login';
 
const Homepage = ({setHomepage}) => {

    const [log, setLog] = useState("");

    const handlebtn = () => {
        setHomepage(false);
        
    }
    

  return (
    <div className='w-full h-screen flex md:flex-row flex-col '>
      <div className=' md:h-screen w-full md:w-1/2 h-[50%] bg-gray-900'>
        <img className='h-screen w-full' src='https://s3-alpha-sig.figma.com/img/8196/a270/19da099d64771f163ae2b0b43b7b18b1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbfEHSb5qzzI55VdKJsZ432wSDmPz2J17dDOtlAAPfFPjlEI0blSlD8FVXyEcWSC1kkabzUdKpm7yog3yGwhqQ8vfhjPl-tMVTpO36tYNNhjQi0HplVnDlaktM1NZdxlFyh~rcUQCu-TlMxKV2pbsWoC03ekWt4v9wm57ksNtscuKJuuFI-tmVOR~V4R07R6FUFBboNLjA4TOJiY-OYCSU7j~J3fXqAOoEVadIR1~EEM4soAy~lGB~3vROhAMMfaaSXC15Ft9ZVFde0xBGs0qRa9Nxs~ak0oikSl2nvfV8amB6u5LnQN4ftbtVzXyrdi3rIT3k6a-ZZYwUBDTiBFJA__' alt="home-img" /> 
      </div>
      <div className='w-full md:w-1/2 h-screen bg-blue-950 flex flex-col justify-center items-center gap-8 '>
      <div className='md:inline-block absolute text-center md:top-10 top-[50%]'>
         <h1 className='my-2 text-3xl text-white font-extralight'>LO<span className='bg-green-800 p-1 m-2 font-bold rounded-lg'>GO</span></h1>
         <p className='text-white'>Journey to a trillion miles starts from here!!</p>
      </div>
      <div className='bg-gray-500 w-full md:w-1/2 text-white p-4 flex flex-col gap-7 justify-center items-center rounded-lg border border-white'>
        <h1 className='text-2xl'>Sign Up</h1>
        <p>Choose a sign up method</p>
        <div onClick={handlebtn} className='p-2 m-2 border text-white border-white rounded-xl w-10/12 text-center hover:cursor-pointer bg-gray-600'>
            <h1>Sign Up with Google</h1>
        </div>
        <div   className='p-2 m-2 border  bg-gray-600 border-white rounded-xl w-10/12 text-center hover:cursor-pointer'>
             
            <a href={<Login/>}>
            <button onClick={()=>setLog(<Login/>)}>Sign Up with Email   </button>
          </a>
      
          
        </div>
        <p>Already a user? <span className='bg-gray-500 hover:cursor-pointer'>Log In</span></p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Homepage
