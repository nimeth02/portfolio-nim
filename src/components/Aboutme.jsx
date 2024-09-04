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
    <div className='mt-20 '>
      <div className='px-4  tracking-wide text-lg lg:text-2xl xl:text-3xl text-white font-bold flex flex-col'>

        <div className=" w-[150px] md:w-[250px] lg:w-[350px]  px-4 py-2 bg-gradient-to-r from-[rgb(138,132,128,0.6)] to-bg rounded-lg" >
          About me
        </div>
      </div>
      <div className='flex justify-center '><div className="w-[32rem]">
        <div className="w-[40rem]">
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
        <div className="w-[25rem] mt-10   ">

        </div>
      </div>
    </div>
  )
}

export default Aboutme