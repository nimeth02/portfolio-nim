import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  TimelineBody,
} from "@material-tailwind/react";

function Aboutme() {
  return (
    <div className='mt-40 '>
       <div className='px-4 my-20 flex flex-col items-center  justify-center'>
        <div className='text-center text-3xl font-bold  px-4 py-2  w-48  text-bt'>
          About me
        </div>
        <div className="flex gap-5">
          <div className=" w-[150px] md:w-[250px] lg:w-[350px] h-[10px] lg:h-[15px] bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
          <div className=" w-[20px] h-[10px] lg:h-[15px]   bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

        </div>


      </div>
      <div className='flex justify-center '>
        
          <div className="">
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-bt">
                    {/* <HomeIcon className="h-4 w-4" /> */}
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    A/L in Physical sceince stram
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 h-[80px]">
                  <Typography color="gary" className="font-normal  text-gray-600">
                    2018 - 2020
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-bt">
                    {/* <BellIcon className="h-4 w-4" /> */}
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Trainee  Software Develeoper at Donext Pvt.Ltd
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 h-[80px]">
                  <Typography color="gary" className="font-normal text-gray-600">
                    PERN Stack | 2022 Februaray - 2022 June
                  </Typography>
                  <Typography color="gary" className="font-normal text-gray-600">

                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector className='' />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-bt">
                    {/* <CurrencyDollarIcon className="h-4 w-4" /> */}
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Bsc.(hons) Information Technology in University of Moratuwa
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='h-[80px]'>
                  <Typography color="gary" className="font-normal text-gray-600">
                    2022 - 2026
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-bt">
                    {/* <CurrencyDollarIcon className="h-4 w-4" /> */}
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Freelancer
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='h-[80px]'>
                  <Typography color="gary" className="font-normal text-gray-600">
                    MERN Stack  |   2024 - Precent
                  </Typography>
                  <Typography color="gary" className="font-normal text-gray-600">

                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        

      </div>
    </div>
  )
}

export default Aboutme