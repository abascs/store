"use client"
import React, { useContext } from 'react'
import {Carditems} from "@/components/context/context"
function btn(props) {
    let {items,handelsetitem}=useContext(Carditems)
  return (
    <button onClick={()=>handelsetitem(props.id)} className=" bg-yellow-400 text-black px-4 py-2 rounded-lg my-4">add to card </button>
  )
}

export default btn