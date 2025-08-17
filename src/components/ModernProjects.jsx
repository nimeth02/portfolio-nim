import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ModernProjects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Admin Application",
      description: "A comprehensive admin dashboard for e-commerce management with role-based access control, POS system, and inventory management.",
      image: "/ecom.png",
      category: "fullstack",
      technologies: ["React", "TypeScript", "Ant Design", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      features: ["Role-based access", "POS System", "Inventory Management", "Analytics Dashboard"],
      githubFrontend: "https://github.com/nimeth02/e-com-admin-frontend",
      githubBackend: "https://github.com/nimeth02/e-com-admin-backend",
      liveDemo: "https://e-com-admin-frontend.onrender.com",
      isLive: true
    },
    {
      id: 2,
      title: "Account Manager",
      description: "Secure account details manager allowing users to organize information across various categories like emails, bank accounts, and personal data.",
      image: "/password.png",
      category: "fullstack",
      technologies: ["Next.js", "Material-Tailwind", "Node.js", "Nest.js", "MongoDB"],
      features: ["Secure Storage", "Category Organization", "Search & Filter", "Data Encryption"],
      githubFrontend: "https://github.com/nimeth02/password-frontend",
      githubBackend: "https://github.com/nimeth02/password-backend",
      liveDemo: "https://password-frontend-x7q1.vercel.app/",
      isLive: true
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, group chats, and instant notifications using Socket.io for seamless communication.",
      image: "/chat.png",
      category: "fullstack",
      technologies: ["React", "Chakra UI", "Node.js", "Express", "MongoDB", "Socket.io"],
      features: ["Real-time Messaging", "Group Chats", "File Sharing", "Online Status"],
      githubFrontend: "https://github.com/nimeth02/chat-max-realtime-chat-appliacation",
      githubBackend: "https://github.com/nimeth02/chat-max-realtime-chat-appliacation",
      liveDemo: "https://chatmax-realtime.onrender.com",
      isLive: true
    },
    {
      id: 4,
      title: "Home Price Prediction",
      description: "ML-powered application that predicts home prices based on location, size, and features using advanced machine learning algorithms.",
      image: "/home.svg",
      category: "ml",
      technologies: ["Next.js", "Tailwind CSS", "Flask", "Pandas", "Scikit-learn"],
      features: ["Price Prediction", "Location Analysis", "Feature Comparison", "Market Trends"],
      githubFrontend: "https://github.com/nimeth02/banglore_home_price_predict",
      githubBackend: "https://github.com/nimeth02/banglore_home_price_predict",
      isLive: false
    },
    {
      id: 5,
      title: "iPhone Price Predictor",
      description: "Machine learning application for predicting iPhone prices in the Sri Lankan market based on model, storage, and condition.",
      image: "/iphone.svg",
      category: "ml",
      technologies: ["React", "Flask", "Pandas", "Scikit-learn", "NumPy"],
      features: ["Price Estimation", "Model Comparison", "Market Analysis", "Condition Assessment"],
      githubFrontend: "https://github.com/nimeth02/apple_mobileapp_price_predict_fullstack_application",
      githubBackend: "https://github.com/nimeth02/apple_mobileapp_price_predict_fullstack_application",
      isLive: false
    },
    {
      id: 6,
      title: "Event Management System",
      description: "Microservices-based event management platform with separate services for events, customers, and payments, orchestrated with RabbitMQ.",
      image: "/event.svg",
      category: "backend",
      technologies: ["Node.js", "Express", "RabbitMQ", "Nginx", "Microservices"],
      features: ["Microservices Architecture", "Message Queue", "Load Balancing", "Service Discovery"],
      githubBackend: "https://github.com/nimeth02/event-managing-microservice",
      isLive: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className='py-20 bg-white' id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            Portfolio
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my latest work spanning full-stack development, machine learning, and backend systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.isLive && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Live
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubFrontend && (
                    <Link
                      href={project.githubFrontend}
                      target="_blank"
                      className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Code
                    </Link>
                  )}
                  {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/nimeth02"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.381C8.806 23.489 9.024 23.108 9.024 22.788C9.024 22.497 9.015 21.858 9.009 20.981C5.672 21.681 4.968 19.719 4.968 19.719C4.437 18.319 3.638 17.941 3.638 17.941C2.545 17.196 3.718 17.214 3.718 17.214C4.919 17.294 5.54 18.436 5.54 18.436C6.615 20.261 8.455 19.748 9.159 19.422C9.269 18.629 9.569 18.078 9.9 17.784C7.215 17.489 4.423 16.407 4.423 11.676C4.423 10.347 4.908 9.267 5.68 8.417C5.551 8.113 5.13 6.841 5.782 5.132C5.782 5.132 6.785 4.814 8.985 6.389C9.927 6.117 10.927 6.009 11.926 6.004C12.924 6.009 13.924 6.117 14.866 6.389C17.064 4.814 18.067 5.132 18.067 5.132C18.72 6.841 18.298 8.113 18.17 8.417C18.942 9.267 19.427 10.347 19.427 11.676C19.427 16.422 16.626 17.481 13.931 17.772C14.339 18.129 14.7 18.857 14.7 19.929C14.7 21.405 14.688 22.448 14.688 22.788C14.688 23.109 14.906 23.493 15.511 23.379C20.292 21.795 24 17.292 24 12C24 5.373 18.627 0 12 0Z" />
            </svg>
            View All Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ModernProjects