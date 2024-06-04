
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Shop from "@/components/shop";
import data from "@/data.json";
import Start from "@/components/start";
import Btn from "@/components/btn";
function page({params}) {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row px-2 mx-auto container">
        <div className="md:w-1/2">
          <p className="font-bold text-slate-500">fast puchase for markets</p>
          <div className="flex items-center justify-between md:justify-start gap-10 py-2 overflow-hidden">
            <div className="flex h-6 w-14 items-center justify-center rounded-md bg-yellow-400 text-xs text-white">
              <p className="mb-1 font-bold">12% off</p>
            </div>
            <CiShare2 className="size-5" />
          </div>
          <div className="flex w-full items-center space-x-9">
            <img
              className="mx-auto w-10/12 lg:w-[400px] rounded-md border shadow-lg"
              src={data[params.id ].image}
              alt=""
            />
          </div>
          <div className="flex mx-auto w-10/12 lg:w-[400px] items-center justify-between py-4">
            <div className="grid w-10 grid-cols-3 grid-rows-2">
              <FaStar className=" text-yellow-400" />
              <p className="pl-1 cols text-xs">4.5</p>
              <p className="pl-1 col-span-2 row-start-2 whitespace-nowrap text-xs">
                125 reviews
              </p>
            </div>
            <Start />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col pl-3 md:mt-20">
            <p className="text-xl font-bold text-slate-800">{data[params.id ].title}</p>
            <div className="relative mt-2">
              <p className="absolute -left-2 -top-3">$</p>
              <p className="text-4xl">{data[params.id ].price}</p>
            </div>
            <p className="text-xs">
              <span className="line-through">5</span> free Delivary
            </p>
          </div>
          <div className="mt-3 flex items-center space-x-6 pb-6 pl-3">
            <p className="text-xl self-start pb-3">COLORS : </p>
            <div className="flex items-center space-x-5">
              <div className="h-6 w-6 rounded-full bg-red-600 outline outline-1 relative before:content-['black'] before:text-sm before:absolute before:-bottom-5 before:-left-2"></div>
              <div className="h-6 w-6 rounded-full bg-yellow-600 outline outline-1 relative before:content-['black'] before:text-sm before:absolute before:-bottom-5 before:-left-2"></div>
              <div className="h-6 w-6 rounded-full bg-green-600 outline outline-1 relative before:content-['black'] before:text-sm before:absolute before:-bottom-5 before:-left-2"></div>
            </div>
          </div>
          <Btn id={data[params.id]}/>
          <div className="w-full rounded-md bg-slate-400">
            <p className="indent-2 text-base font-bold">description</p>
            <p className="pl-5 text-xs">{data[params.id ].description}</p>
          </div>
          
        </div>
      </div>
      <Shop />
    </div>
  );
}

export default page;
