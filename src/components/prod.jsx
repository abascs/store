import Card from "./card"
export default function prod() {
  return (
    <div className='w-full flex flex-col justify-start items-center mt-4 gap-4 '>
      <h1 className="text-3xl md:text-5xl">Featured product</h1>
      <div className=' h-1 w-40 bg-black '></div>
      <div className="w-full flex justify-center">
      <div className=" flex *:flex-shrink-0 gap-4 px-10 mt-5 overflow-x-scroll md:gap-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    </div>
  )
}
