import React, { useRef, useState } from 'react'
import gitlogo from '../../public/gitlogo.svg'
import linkedin from '../../public/linkedin.svg'
import phone from '../../public/phone.svg'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

function Contactme() {
    const form = useRef();

    const validateForm = () => {
        let isValid = true;
        let errors = "";

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.yourMessage.value.trim();

        switch (true) {
            case !name:
                errors = 'Name is required';
                isValid = false;
                break;
            case !email:
                errors = 'Email is required';
                isValid = false;
                break;
            case !/\S+@\S+\.\S+/.test(email):
                errors = 'Invalid email address';
                isValid = false;
                break;
            case !message:
                errors = 'Message is required';
                isValid = false;
                break;
            default:
                break;
        }


        return { isValid, errors };
    };


    const handleSend = () => {
        const { isValid, errors } = validateForm()
        if (isValid) {
            emailjs.sendForm('service_n5glj5l', 'template_mdlg3td', form.current, {
                publicKey: 'NEc93PyXyw1L4XDLt',
            }).then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,

                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Something went wrong', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                },
            );
        }
        else {
            toast.error(errors, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }
    return (<div>
        <div><div className='px-4 my-20 flex flex-col items-center  justify-center'>
        <div className='text-center text-3xl font-bold  px-4 py-2  w-54  text-bt'>
          Contact me
        </div>
        <div className="flex gap-5">
          <div className=" w-[150px] md:w-[250px] lg:w-[350px] h-[10px] lg:h-[15px] bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
          <div className=" w-[20px] h-[10px] lg:h-[15px]   bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

        </div>


      </div></div>
        <div className='flex flex-col md:flex-row items-center gap-10 mt-20 mx-20 ' id="contactme">
            
            <div className=' opacity-80  bg-[#f5f5f5]  flex-1 p-4 rounded py-10'>
                <div className='text-lg'>
                    Get in Touch
                </div>
                <div className='text-md mt-20'>
                    I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
                </div>
                <div className='mt-20  flex flex-col gap-2'>
                    <div className='flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                        </svg>
                        0706585632
                    </div>
                    <div className='flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>

                        nimeth20011002@gmai.com
                    </div>

                </div>
                <div className='mt-20 flex gap-5 items-center'>
                    
                    <Link
                           href="https://www.linkedin.com/in/nimeth-nimdinu-231396213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="navbar--content"
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
                            className="navbar--content"
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
            </div>
            <form ref={form} className='flex flex-col gap-10 flex-1  w-full'>
                <input className="bg-[#f5f5f5]  placeholder-gray-400 rounded w-full py-2 px-4  leading-tight outline-none  "
                    placeholder='Name'
                    name="name"
                />
                <input className="bg-[#f5f5f5]  placeholder-gray-400 rounded w-full py-2 px-4  leading-tight outline-none  "
                    placeholder='Email'
                    name="email"
                />
                <input className="bg-[#f5f5f5]  placeholder-gray-400 rounded w-full py-2 px-4  leading-tight outline-none  "
                    placeholder='Subject'
                    name="subject"
                />
                <textarea className="bg-[#f5f5f5]   h-[200px] placeholder-gray-400 rounded w-full py-2 px-4  leading-tight outline-none  "
                    placeholder='Your messsage'
                    name="yourMessage"
                />
                <div onClick={handleSend} className=' bg-black text-white px-4 py-2 w-[150px] rounded cursor-pointer'>
                    Send Message
                </div>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />

        </div>
        </div>)
}

export default Contactme