import Image from 'next/image'
import React from 'react'
import nodeLogo from '../../public/nodeLogo.png'
import { Typography } from '@material-tailwind/react'
function Technology() {
  return (
    <div className='mt-40 mx-40' id="technology" >
      <div className='px-4 my-20 flex flex-col items-center  justify-center'>
        <div className='text-center text-3xl font-bold  px-4 py-2    text-bt'>
          Technologies
        </div>
        <div className="flex gap-5">
          <div className=" w-[150px] md:w-[250px] lg:w-[350px] h-[10px] lg:h-[15px] bg-gradient-to-r from-green-400 to-green-600  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
          <div className=" w-[20px] h-[10px] lg:h-[15px]   bg-gradient-to-r from-green-400 to-green-600  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

        </div>
        {/* <div>
  <div>
  <div className="flex justify-center ">
                        <Image alt="Image P1" src={nodeLogo} className="h-[300px] md:h-[500px]" />
                    </div>
</div>
  </div> */}


      </div>
      <div className='flex justify-center '>
        <div className=' grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-y-10  md:gap-x-20'>
          <div className='px-3 py-1 bg-white border-2 border-bt text-center w-[130px] text-black rounded  '>
            Node js
          </div>
          <div className='px-2 py-1 flex justify-center bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            JavaScript
          </div>

          <div className='px-2 py-1 flex justify-center bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Next js
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            React js
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded  -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Nest js
          </div>
          <div className='px-2 py-1 flex justify-center bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Express  js
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Pandas
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            TypeScript
          </div>
          <div className='px-2 py-1  flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Flask
          </div>
          <div className='px-2 py-1 flex justify-center bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Tailwind CSS
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-black rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            Mongo DB
          </div>
          <div className='px-2 py-1 flex justify-center  bg-white border-2 border-bt text-center w-[130px] text-blackrounded rounded -shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
            MSSQL
          </div>
        </div>

      </div>
      {/* <div className='flex justify-center '>
        <Image alt="image T" src={techTree} />
        </div> */}
    </div>
  )
}

export default Technology