import React from 'react'
import Link from 'next/link'

function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ]

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/nimeth02',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.381C8.806 23.489 9.024 23.108 9.024 22.788C9.024 22.497 9.015 21.858 9.009 20.981C5.672 21.681 4.968 19.719 4.968 19.719C4.437 18.319 3.638 17.941 3.638 17.941C2.545 17.196 3.718 17.214 3.718 17.214C4.919 17.294 5.54 18.436 5.54 18.436C6.615 20.261 8.455 19.748 9.159 19.422C9.269 18.629 9.569 18.078 9.9 17.784C7.215 17.489 4.423 16.407 4.423 11.676C4.423 10.347 4.908 9.267 5.68 8.417C5.551 8.113 5.13 6.841 5.782 5.132C5.782 5.132 6.785 4.814 8.985 6.389C9.927 6.117 10.927 6.009 11.926 6.004C12.924 6.009 13.924 6.117 14.866 6.389C17.064 4.814 18.067 5.132 18.067 5.132C18.72 6.841 18.298 8.113 18.17 8.417C18.942 9.267 19.427 10.347 19.427 11.676C19.427 16.422 16.626 17.481 13.931 17.772C14.339 18.129 14.7 18.857 14.7 19.929C14.7 21.405 14.688 22.448 14.688 22.788C14.688 23.109 14.906 23.493 15.511 23.379C20.292 21.795 24 17.292 24 12C24 5.373 18.627 0 12 0Z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/nimeth-nimdinu-231396213',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/nims_kv',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="font-bold text-xl">Nimeth Nimdinu</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Passionate software developer specializing in full-stack development and machine learning. 
                            Always eager to take on new challenges and create innovative solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>📧 nimeth20011002@gmail.com</p>
                            <p>📱 +94 70 658 5632</p>
                            <p>📍 Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Nimeth Nimdinu. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer