import axios from 'axios'
import React, { useEffect } from 'react'

function Dashboard() {
    useEffect(()=>{
        axios.get("http://localhost:3001/dashboard")
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard