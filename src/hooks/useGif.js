import axios from 'axios';
import React, { useEffect, useState } from 'react'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

const useGif = (tag) => {

  const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
    const [gif,setGif]=useState('')
    const [loading,setLoading]=useState(false)

    async function fetchData() {
        setLoading(true)
        const {data}=await axios.get(tag ? `${tagUrl}&tag=${tag}` : tagUrl)
        const imageSource=data.data.images.downsized_large.url
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return {gif,loading,fetchData}

}

export default useGif