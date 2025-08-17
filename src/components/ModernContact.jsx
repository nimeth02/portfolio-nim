import React, { useRef, useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ModernContact() {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false)

    const validateForm = () => {
        let isValid = true
        let errors = ""

        const name = form.current.name.value.trim()
        const email = form.current.email.value.trim()
        const message = form.current.yourMessage.value.trim()

        switch (true) {
            case !name:
                errors = 'Name is required'
                isValid = false
                break
            case !email:
                errors = 'Email is required'
                isValid = false
                break
            case !/\S+@\S+\.\S+/.test(email):
                errors = 'Invalid email address'
                isValid = false
                break
            case !message:
                errors = 'Message is required'
                isValid = false
                break
            default:
                break
        }

        return { isValid, errors }
    }

    const handleSend = async () => {
        const { isValid, errors } = validateForm()
        if (isValid) {
            setIsLoading(true)
            try {
                await emailjs.sendForm('service_n5glj5l', 'template_mdlg3td', form.current, {
                    publicKey: 'NEc93PyXyw1L4XDLt',
                })
                toast.success('Message sent successfully! I\'ll get back to you soon.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "light",
                    transition: Zoom,
                })
                form.current.reset()
            } catch (error) {
                toast.error('Something went wrong. Please try again.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "light",
                    transition: Zoom,
                })
            } finally {
                setIsLoading(false)
            }
        } else {
            toast.error(errors, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            })
        }
    }

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
            ),
            title: "Phone",
            value: "+94 70 658 5632",
            href: "tel:+94706585632"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            ),
            title: "Email",
            value: "nimeth20011002@gmail.com",
            href: "mailto:nimeth20011002@gmail.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Location",
            value: "Colombo, Sri Lanka",
            href: "#"
        }
    ]

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/nimeth02",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.381C8.806 23.489 9.024 23.108 9.024 22.788C9.024 22.497 9.015 21.858 9.009 20.981C5.672 21.681 4.968 19.719 4.968 19.719C4.437 18.319 3.638 17.941 3.638 17.941C2.545 17.196 3.718 17.214 3.718 17.214C4.919 17.294 5.54 18.436 5.54 18.436C6.615 20.261 8.455 19.748 9.159 19.422C9.269 18.629 9.569 18.078 9.9 17.784C7.215 17.489 4.423 16.407 4.423 11.676C4.423 10.347 4.908 9.267 5.68 8.417C5.551 8.113 5.13 6.841 5.782 5.132C5.782 5.132 6.785 4.814 8.985 6.389C9.927 6.117 10.927 6.009 11.926 6.004C12.924 6.009 13.924 6.117 14.866 6.389C17.064 4.814 18.067 5.132 18.067 5.132C18.72 6.841 18.298 8.113 18.17 8.417C18.942 9.267 19.427 10.347 19.427 11.676C19.427 16.422 16.626 17.481 13.931 17.772C14.339 18.129 14.7 18.857 14.7 19.929C14.7 21.405 14.688 22.448 14.688 22.788C14.688 23.109 14.906 23.493 15.511 23.379C20.292 21.795 24 17.292 24 12C24 5.373 18.627 0 12 0Z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nimeth-nimdinu-231396213",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/nims_kv",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        }
    ]

    return (
        <section className='py-20 bg-white' id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4'>
                        Get In Touch
                    </div>
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-emerald-100 mb-8 leading-relaxed">
                                I'm very approachable and would love to speak with you. Feel free to call, send me an email, or reach out through social media.
                            </p>
                            
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 text-white hover:text-emerald-100 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-emerald-100 text-sm">{info.title}</p>
                                            <p className="font-semibold">{info.value}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-emerald-400/30">
                                <p className="text-emerald-100 mb-4">Follow me on social media</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                                        >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Response Promise */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">Quick Response</h4>
                            </div>
                            <p className="text-gray-600">
                                I typically respond to messages within 24 hours. For urgent inquiries, feel free to call me directly.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                        <form ref={form} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="yourMessage"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                                    placeholder="Tell me about your project or inquiry..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="button"
                                onClick={handleSend}
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Zoom}
            />
        </section>
    )
}

export default ModernContact