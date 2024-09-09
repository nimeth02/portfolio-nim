import Image from 'next/image'
import React from 'react'
import gitlogo from '../../public/gitlogo.svg'
import styles from './productcard.module.css';
import Link from 'next/link'

function ProjectCard({ image, title, description, isLive, frontend, backend, frontendlink, backendlink, livelink }) {
    return (
        <>
            <div className='  rounded-xl flex flex-col  bg-[#f5f5f5] opacity-80  drop-shadow-[0px_0px_10px_rgba(205,205,205,0.5)] hover:scale-105 duration-150'>
                <div className='rounded-xl   flex items-center  bg-gray-600'>
                    <Image alt="Image G" src={image} className=' flex justify-center text-center rounded w-[400px] h-[200px] ' />
                </div>
                <div className='px-4    transparent   p-4 text-justify rounded  flex flex-col justify-between gap-10'>
                    <div className=' h-[30px] text-bt font-bold text-md text-center'>{title}</div>
                    <div className=' h-[200px]  justify-center text-sm '>{description}</div>

                    <div className='pl-6 h-[100px] pt-4'>
                        <ul className="list-disc">

                            <Link className='flex items-center gap-2 ' href={frontendlink || " "}>
                                <li className=''><div className='flex gap-1'><div className='underline'>frontend</div><div>-</div> <div className='text-left'> {frontend}</div></div></li>
                            </Link>
                            <Link className='flex items-center gap-2' href={backendlink || " "}>
                                <li><div className='flex gap-1 '><div className='underline '>backend</div><div>-</div> <div className='text-left'>{backend}</div></div></li>
                            </Link>
                        </ul>
                    </div>

                    {/* <div className='flex items-center gap-5 flex-col sm:flex-row'>

                  

                    <Link className='flex items-center gap-2' href={frontendlink || " "}>
                        <div className='underline'>frontend</div>
                        <Image alt="Image G" src={gitlogo} className='h-8 w-8 ' />

                    </Link>
                    <Link className='flex items-center gap-2' href={backendlink || " "}>
                        <div className='underline'>backend</div>
                        <Image alt="Image G" src={gitlogo} className='h-8 w-8 ' />

                    </Link>
                </div> */}
                    <div className='h-[20px]'>
                        {isLive && <Link className='flex items-center text-bt font-semibold' href={livelink || " "}>
                            <div className='underline'>Live</div>
                            <div className={`w-4 h-4 rounded-full bg-bt ${styles['animate-pulse']} mx-2`}>

                            </div>
                        </Link>}
                    </div>


                </div>

            </div>
        </>
    )
}

export default ProjectCard