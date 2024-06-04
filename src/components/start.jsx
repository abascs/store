"use client"
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import React, { useState } from 'react'

function start() {
  let [state,setstate]=useState(false)
  return (
    <div className="flex items-end h-full *:size-6">
      {state?<FaHeart className=" text-red-700" onClick={()=>{setstate(!state)}}/>:<CiHeart onClick={()=>{setstate(!state)}}/>}
      
    </div>
  )
}

export default start