import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
    const {gif,loading,fetchData}=useGif();
    function clickHandler(){
        fetchData()
    }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" width="450"/>)
        }

        <button onClick={clickHandler}
            className='w-10/12 bg-white opacity-60 py-2 rounded-lg text-black text-xl mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random