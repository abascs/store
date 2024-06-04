"use client"
import Image from 'next/image';
import React, { useState } from 'react'

//icons
import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
//image
import logo from '../../public/image/logo.png'
import Link from 'next/link';
function header() {
    let [menu,setmenu]=useState(false)
  return (
    <header className='bg-[#ebebeb] flex justify-between items-center w-full px-2 lg:px-32 shadow h-16'>
        <div className='block sm:hidden'><MdMenu onClick={()=>{setmenu(!menu)}} className=' size-10'/></div>
        <div className=''><Link href={"/"}><Image alt='logo' src={logo} width={100}/></Link></div>
        <div className={menu?' w-[250px] h-96 absolute transition-all top-16 duration-500 flex flex-col justify-around items-center bg-white overflow-hidden':" w-0 h-0 transition-all absolute top-16 duration-500 flex flex-col justify-around items-center bg-white overflow-hidden"}>
        
                <Link href={'/'}>home</Link>
                <Link href={'/#shop'}>shop</Link>
                <Link href={'#'}>about</Link>
                <Link href={'#'}>blog</Link>
                <Link href={'#'}>contact</Link>
                <Link href={'#'}>contact</Link>
        
        </div>
        <div className='hidden sm:block'>
            <ul className='flex gap-2 md:gap-8'>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/#shop'}>shop</Link></li>
                <li><Link href={'#'}>about</Link></li>
                <li><Link href={'#'}>blog</Link></li>
                <li><Link href={'#'}>contact</Link></li>
            </ul>
        </div>
        <div>
            <ul className='flex gap-2'>
                <li><IoMdSearch  className=' size-6'/></li>
                <li><Link href={"/card"}><SlBasket  className=' size-6'/></Link></li>
                <li><CiHeart  className=' size-6'/></li>
            </ul>
        </div>
    </header>
  )
}

export default header