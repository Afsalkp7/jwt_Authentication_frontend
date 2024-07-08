import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [message,setMessage] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:3001/dashboard")
        .then((res)=>{
            if(res.data.valid){
                setMessage(res.data.message)
            }else{
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>{message}</div>
  )
}

export default Dashboard