import Image from 'next/image'
import React from 'react'
import gitlogo from '../../public/gitlogo.svg'
import styles from './productcard.module.css';
import Link from 'next/link'

function ProjectCard({ image, title, description, isLive, frontend, backend, frontendlink, backendlink, livelink }) {
    return (
        <>
            <div className=' flex flex-col  px-4 sm:px-20 '>
                <div className=' w-[300px] border-2 border-black rounded-lg flex items-center  bg-gray-600'>
                    <Image alt="Image G" src={image} className=' rounded w-[300px] h-[150px] ' />
                </div>
                <div className='px-2 border-2 border-black w-[300px] bg-[rgb(255,255,255)] transparent   p-4 text-justify rounded  flex flex-col justify-between gap-10'>
                    <div className=' h-[30px]  font-bold text-md text-center'>{title}</div>
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