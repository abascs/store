import Link from 'next/link'
function nav() {
  return (
    <div className='bg-[#ebebeb] grid grid-row-2 lg:grid-cols-2  py-10 md:pt-20'>
        <div className="px-10  md:px-32 text-center lg:text-start flex flex-col justify-start gap-4 md:gap-10 items-center">
            <h1 className=" text-3xl md:text-5xl ">comfortable sofa with great comfort</h1>
            <p className=" sm:hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel!</p>
            <p className="hidden  sm:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quas, deserunt facere accusamus itaque dolore delectus molestiae quidem assumenda vitae.</p>
            <Link href={"#shop"}><button className=" self-center lg:self-start hidden md:block border border-black px-8 py-3">SHOP NOW</button></Link>
        </div>
        <div className="e w-full mt-10 md:aspect-auto flex flex-col justify-center lg:items-start items-center">
             <img src="image/sofa.png"  alt="sofa" className=" w-[200px] md:w-[320px] md:ml-20"/>
            <Link href={"#shop"}><button className="md:hidden border border-black px-8 py-3">SHOP NOW</button></Link>
        </div>
    </div>
  )
}

export default nav
{/* <div className='bg-[#ebebeb] grid grid-cols-2 px-20'>
        <div className='w-full h-full flex flex-col px-32 gap-8 justify-start py-20 items-start'>
            <h1 className=' text-5xl'>comfortable sofa with great comfort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis quaerat dignissimos quod odio error repudiandae assumenda aut, deleniti quisquam?</p>
            <button className='border border-black px-8 py-2 font-bold'>SHOP NOW</button>
        </div>
        <div style={{backgroundImage:"url('image/sofa.png')"}} className=' bg-contain bg-no-repeat'></div>
    </div> */}