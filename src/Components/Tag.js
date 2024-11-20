import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag,setTag]=useState('')
  const {gif,loading,fetchData}=useGif(tag)
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black 
        flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" width="450"/>)
        }

        <input 
            className='w-10/12 bg-white opacity-80 py-2 rounded-lg text-black text-xl mb-[20px] text-center'
            onChange={(event)=>setTag(event.target.value)}
            value={tag}/>

        <button onClick={()=>fetchData(tag)}
            className='w-10/12 bg-white opacity-60 py-2 rounded-lg text-black text-xl mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag