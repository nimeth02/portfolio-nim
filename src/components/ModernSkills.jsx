import React from 'react'

function ModernSkills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-800" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-teal-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-700" },
        { name: "Nest.js", level: 75, color: "from-red-500 to-red-600" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-700" }
      ]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "Pandas", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "Scikit-learn", level: 75, color: "from-orange-500 to-orange-600" },
        { name: "Flask", level: 70, color: "from-gray-600 to-gray-700" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
        { name: "RabbitMQ", level: 65, color: "from-orange-600 to-orange-700" },
        { name: "Nginx", level: 60, color: "from-green-500 to-green-600" }
      ]
    }
  ]

  const certifications = [
    {
      title: "PERN Stack Development",
      issuer: "Donext Pvt.Ltd",
      year: "2022",
      icon: "📜"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Self-taught",
      year: "2023",
      icon: "🎓"
    },
    {
      title: "Full Stack Development",
      issuer: "University of Moratuwa",
      year: "2024",
      icon: "🏛️"
    }
  ]

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-white' id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            Expertise
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Skills Categories */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{cert.title}</h4>
                      <p className="text-gray-600 text-xs">{cert.issuer}</p>
                      <p className="text-emerald-600 text-xs font-medium">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-100">Languages</span>
                  <span className="font-bold">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-100">Frameworks</span>
                  <span className="font-bold">12+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-100">Projects</span>
                  <span className="font-bold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-100">Experience</span>
                  <span className="font-bold">2+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { name: "React", color: "text-blue-500" },
              { name: "Node.js", color: "text-green-500" },
              { name: "Python", color: "text-yellow-500" },
              { name: "MongoDB", color: "text-green-600" },
              { name: "Next.js", color: "text-gray-800" },
              { name: "TypeScript", color: "text-blue-600" },
              { name: "Express", color: "text-gray-600" },
              { name: "Tailwind", color: "text-teal-500" }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                  <div className="w-8 h-8 bg-current rounded opacity-80"></div>
                </div>
                <span className="text-xs text-gray-600 mt-2 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernSkills