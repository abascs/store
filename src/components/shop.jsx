"use client"
import Card from "./card"
import data from "@/data.json"
import { useState } from "react"
function shop() {
  
  let [v,setv]=useState(10);
  let [type,settype]=useState(/.*/);
  return (
    <div id="shop" className='w-full flex flex-col justify-start items-center px-2 gap-4 mt-4 mb-32'>
      <h1 className="text-3xl md:text-5xl">Our Products</h1>
      <div className=' h-1 w-40 bg-black '></div>
      <div className='w-full text-nowrap flex justify-between items-center'>
        <ul className='flex gap-2 *:cursor-pointer'>
          <li onClick={()=>settype(/.*/)} className=' font-bold'>All Products</li>
          <li onClick={()=>settype(/men's clothing/)}>clothes</li>
          <li  onClick={()=>settype(/electronics/)}>elcetrons</li>
          <li onClick={()=>settype(/jewelery/)}>daimond</li>
        </ul>
      </div>
      <div id="shop" className='w-full lg:px-32 flex flex-wrap justify-start items-center'>
        {
          data.slice(0,v).map((d)=>{
            for(let i=0;i<v;i++){

            }
            if(type.test(d.category)){
              return(<Card data={d} key={d.id}/>)
            }
          })
        }
      </div>
        <button onClick={()=>setv(v+10)} className="border border-black px-2 py-1">SHOW MORE</button>
    </div>
  )
}

export default shop