import React from 'react'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { UilArrowRight } from '@iconscout/react-unicons'
import styles from './productcard.module.css';

function Welcome() {
    const text = "Nimeth Nimdinu"
    return (
        <div className='mt-32 mx-8 '>
            
            <div className="flex gap-20 " id="home">
                <div className='relative flex-2 items-center  '>
                    <Image alt="Image P1" src="https://github.com/nimeth02.png" className="z-10 border-2 border-bg absolute bottom right-4 flex-1   bg-bg2 rounded-full  h-[300px] w-[300px] " />
                    <div className=' bg-bt h-[300px] w-[300px] rounded-full'></div>
                    {/* <div className="relative w-[300px] h-[300px]">
                        <div className="triangle  absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                        <div className="trianglesecond  absolute bottom-2   left-[40%] transform -translate-x-1/2"></div>
                    </div> */}
                </div>
                <div className="relative flex-1 flex flex-col  border-l-2 px-8 border-bt pb-4">

                    {/* <div className=' text-bt animate-pulse  w-[230px] text-6xl lg:w-[390px] xl:w-[560px]'>Nimeth Nimdinu </div> */}
                    <div className="relative inline-block">
                        {text.split("").map((char, index) => (
                            <span
                                className="text-bt text-6xl  animate-text-reveal inline-block"
                                key={`${char}-${index}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                    <div className=' animate-fade-in text-gray-600 text-2xl'>Backend developer | Machine learning developer</div>
                    <div className='mt-10 text-justify'>
                        I am an undergraduate from the Faculty of Information Technology at the
                        University of Moratuwa, focusing on machine learning and backend
                        development. I am eager to apply my skills through a Software
                        Engineering internship, bringing enthusiasm for continuous learning,
                        adaptability, and collaboration to tackle complex challenges and
                        contribute to innovative IT solutions.
                    </div>
                    <div className="flex gap-3 mt-10 items-center">


                        <Link
                            href="https://www.facebook.com/nimesh.kavinda.35977?mibextid=LQQJ4d"
                            className="navbar--content duration-300  hover:scale-150"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 33 33"
                                fill="none"
                                className="Social-image"
                            >
                                <path
                                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                                    fill="#000000"
                                />
                            </svg>
                        </Link>


                        <Link
                            href="https://www.instagram.com/nims_kv?igsh=MWJiMDZ0ejFsNmUyOQ%3D%3D&utm_source=qr"
                            className="hover:scale-150 duration-300  navbar--content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 33 33"
                                fill="none"
                                className="Social-image"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                                    fill="#000000"
                                />
                            </svg>
                        </Link>



                        <Link
                            href="https://www.linkedin.com/in/nimeth-nimdinu-231396213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="hover:scale-150 duration-300  navbar--content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 33 33"
                                fill="none"
                                className="Social-image"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                                    fill="#000000"
                                />
                            </svg>
                        </Link>


                        <Link
                            href="https://github.com/nimeth02"
                            className="hover:scale-125 duration-300  navbar--content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="Social-image"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.381C8.806 23.489 9.024 23.108 9.024 22.788C9.024 22.497 9.015 21.858 9.009 20.981C5.672 21.681 4.968 19.719 4.968 19.719C4.437 18.319 3.638 17.941 3.638 17.941C2.545 17.196 3.718 17.214 3.718 17.214C4.919 17.294 5.54 18.436 5.54 18.436C6.615 20.261 8.455 19.748 9.159 19.422C9.269 18.629 9.569 18.078 9.9 17.784C7.215 17.489 4.423 16.407 4.423 11.676C4.423 10.347 4.908 9.267 5.68 8.417C5.551 8.113 5.13 6.841 5.782 5.132C5.782 5.132 6.785 4.814 8.985 6.389C9.927 6.117 10.927 6.009 11.926 6.004C12.924 6.009 13.924 6.117 14.866 6.389C17.064 4.814 18.067 5.132 18.067 5.132C18.72 6.841 18.298 8.113 18.17 8.417C18.942 9.267 19.427 10.347 19.427 11.676C19.427 16.422 16.626 17.481 13.931 17.772C14.339 18.129 14.7 18.857 14.7 19.929C14.7 21.405 14.688 22.448 14.688 22.788C14.688 23.109 14.906 23.493 15.511 23.379C20.292 21.795 24 17.292 24 12C24 5.373 18.627 0 12 0Z"
                                    fill="#000000"
                                />
                            </svg>
                        </Link>


                    </div>

                    <Link className='' href="#contactme">
                        <div className='group flex gap-4 text-center mt-8  pl-6 pr-2 py-2 bg-black w-44  hover:w-48  rounded-full text-white duration-300 '>
                            <div>
                                Get In Touch
                            </div>
                            <div className='hidden  group-hover:inline   transition-opacity opacity-0 group-hover:opacity-100'>
                                <UilArrowRight />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex gap-20  ">
                <div className='w-[300px] flex-2 items-center  '>
                </div>
                <div className="flex-1 flex flex-col   px-8 pb-4">



                </div>
            </div>


        </div>
    )
}

export default Welcome
