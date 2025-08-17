import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UilArrowRight, UilDownloadAlt } from '@iconscout/react-unicons'

function Hero() {
    const text = "Nimeth Nimdinu"
    
    return (
        <div className='min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16' id="home">
            <div className="max-w-7xl w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Profile Image Section */}
                    <div className='relative flex justify-center lg:justify-end order-1 lg:order-2'>
                        <div className="relative">
                            {/* Floating elements */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
                            
                            {/* Main profile container */}
                            <div className="relative">
                                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 p-2 shadow-2xl">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                                        <Image 
                                            alt="Nimeth Nimdinu" 
                                            src="https://avatars.githubusercontent.com/u/90857630?v=4" 
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                
                                {/* Floating badges */}
                                <div className="absolute -top-2 right-8 bg-white rounded-full px-4 py-2 shadow-lg border border-emerald-100">
                                    <span className="text-sm font-semibold text-emerald-600">Available for work</span>
                                </div>
                                <div className="absolute bottom-8 -left-4 bg-emerald-500 text-white rounded-full px-4 py-2 shadow-lg">
                                    <span className="text-sm font-semibold">Full Stack Dev</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        {/* Greeting */}
                        <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            👋 Hello, I'm
                        </div>

                        {/* Animated Name */}
                        <div className="mb-4">
                            <div className="relative inline-block">
                                {text.split("").map((char, index) => (
                                    <span
                                        className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent animate-text-reveal inline-block"
                                        key={`${char}-${index}`}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Role */}
                        <div className='text-2xl lg:text-3xl text-gray-600 mb-6 animate-fade-in'>
                            <span className="font-light">Backend Developer</span>
                            <span className="mx-2 text-emerald-500">•</span>
                            <span className="font-light">ML Engineer</span>
                        </div>

                        {/* Description */}
                        <p className='text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl animate-fade-in'>
                            Passionate undergraduate from University of Moratuwa, specializing in 
                            <span className="text-emerald-600 font-medium"> machine learning</span> and 
                            <span className="text-emerald-600 font-medium"> backend development</span>. 
                            Ready to bring innovative solutions to complex challenges.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4 mb-8">
                            {[
                                { href: "https://github.com/nimeth02", icon: "github" },
                                { href: "https://www.linkedin.com/in/nimeth-nimdinu-231396213", icon: "linkedin" },
                                { href: "https://www.instagram.com/nims_kv", icon: "instagram" },
                                { href: "https://www.facebook.com/nimesh.kavinda.35977", icon: "facebook" }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-100"
                                >
                                    {social.icon === 'github' && (
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.381C8.806 23.489 9.024 23.108 9.024 22.788C9.024 22.497 9.015 21.858 9.009 20.981C5.672 21.681 4.968 19.719 4.968 19.719C4.437 18.319 3.638 17.941 3.638 17.941C2.545 17.196 3.718 17.214 3.718 17.214C4.919 17.294 5.54 18.436 5.54 18.436C6.615 20.261 8.455 19.748 9.159 19.422C9.269 18.629 9.569 18.078 9.9 17.784C7.215 17.489 4.423 16.407 4.423 11.676C4.423 10.347 4.908 9.267 5.68 8.417C5.551 8.113 5.13 6.841 5.782 5.132C5.782 5.132 6.785 4.814 8.985 6.389C9.927 6.117 10.927 6.009 11.926 6.004C12.924 6.009 13.924 6.117 14.866 6.389C17.064 4.814 18.067 5.132 18.067 5.132C18.72 6.841 18.298 8.113 18.17 8.417C18.942 9.267 19.427 10.347 19.427 11.676C19.427 16.422 16.626 17.481 13.931 17.772C14.339 18.129 14.7 18.857 14.7 19.929C14.7 21.405 14.688 22.448 14.688 22.788C14.688 23.109 14.906 23.493 15.511 23.379C20.292 21.795 24 17.292 24 12C24 5.373 18.627 0 12 0Z" />
                                        </svg>
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    )}
                                    {social.icon === 'instagram' && (
                                        <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    )}
                                    {social.icon === 'facebook' && (
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#contactme">
                                <div className='group flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                    <span>Get In Touch</span>
                                    <UilArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                            <button className='flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                <UilDownloadAlt className="w-5 h-5" />
                                <span>Download CV</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero