import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  TimelineBody,
} from "@material-tailwind/react"

function ModernAbout() {
  const timelineData = [
    {
      title: "A/L in Physical Science Stream",
      period: "2018 - 2020",
      description: "Completed Advanced Level studies focusing on Physical Science subjects",
      icon: "🎓"
    },
    {
      title: "Trainee Software Developer",
      company: "Donext Pvt.Ltd",
      period: "February 2022 - June 2022",
      description: "Gained hands-on experience with PERN Stack development",
      tech: "PostgreSQL • Express.js • React • Node.js",
      icon: "💼"
    },
    {
      title: "BSc.(Hons) Information Technology",
      company: "University of Moratuwa",
      period: "2022 - 2026",
      description: "Currently pursuing undergraduate degree in Information Technology",
      icon: "🏛️"
    },
    {
      title: "Freelance Developer",
      period: "2024 - Present",
      description: "Working as a freelance developer specializing in MERN Stack applications",
      tech: "MongoDB • Express.js • React • Node.js",
      icon: "🚀"
    }
  ]

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-white' id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            My Journey
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate undergraduate from the Faculty of Information Technology at the 
                University of Moratuwa, with a strong focus on machine learning and backend development. 
                My journey in technology has been driven by curiosity and a desire to solve complex problems 
                through innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I bring enthusiasm for continuous learning, adaptability, and collaboration to every project. 
                My goal is to contribute to cutting-edge IT solutions while growing as a software engineer 
                in a dynamic, challenging environment.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-emerald-100">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">My Journey</h3>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-emerald-600 font-medium">{item.period}</span>
                    </div>
                    {item.company && (
                      <p className="text-emerald-600 font-medium mb-2">{item.company}</p>
                    )}
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    {item.tech && (
                      <div className="flex flex-wrap gap-2">
                        {item.tech.split(' • ').map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Connector line */}
                  {index < timelineData.length - 1 && (
                    <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-emerald-200 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernAbout