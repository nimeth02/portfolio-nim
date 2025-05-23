import React from 'react'
import profile from '../../public/profile.svg'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'

function Profile() {
    return (
        <div>
            <div className="lg:mt-20">
                <div className="flex flex-col md:flex-row-reverse justify-between 2xl:pr-40 items-center">
                    <div className="flex justify-center ">
                        <Image alt="Image P1" src={profile} className="h-[300px] md:h-[500px]" />
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-10 p-4">
                        <div className="font-semibold tracking-wide text-lg lg:text-2xl xl:text-3xl ">
                            HI, MY NAME IS
                        </div>
                        <div className="font-semibold   text-3xl lg:text-5xl  xl:text-6xl   w-[230px]  lg:w-[390px] xl:w-[460px]">
                            <div className=' text-bt  w-[230px]  lg:w-[390px] xl:w-[560px]'>Nimeth Nimdinu </div>
                            <div className='text-bt  w-[250px]  lg:w-[420px] xl:w-[490px]'>I am a Software Developer</div> 
                        </div>
                        <div className="flex gap-5">
                            <div className=" h-[10px] lg:h-[15px] w-[200%]  bg-gradient-to-r from-green-400 to-green-600  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
                            <div className=" h-[10px] lg:h-[15px] w-[10%]  bg-gradient-to-r from-green-400 to-green-600  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
