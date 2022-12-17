import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const User = () => {
  const [data, setdata]= useState([])
  useEffect(()=>{
    getDataFunction()
  },[])
  const getDataFunction = ()=>{
    axios.get("http://localhost:8080/user")
    .then((res)=>{
      setdata(res.data.blog)
      console.log(res.data.blog)
    })
    .catch((e)=>console.log(e))
  }
  
  return (
    <div>
      
    </div>
  )
}

export default User