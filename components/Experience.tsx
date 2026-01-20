
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Accenture",
      period: "Nov 2022 – Present",
      description: [
        "Developed and enhanced web applications using ASP.NET Core Web API and Angular.",
        "Built and consumed RESTful APIs to support frontend features.",
        "Designed and optimized SQL Server queries and stored procedures.",
        "Worked on Angular version upgrades from v13 to v18.",
        "Delivered 20+ user stories end-to-end following best practices."
      ],
      type: "work"
    },
    {
      role: "B.E. Mechatronics Engineering",
      company: "Kongu Engineering College",
      period: "2018 – 2022",
      description: [
        "GPA: 8.89 / 10 (First Class with Distinction)",
        "Focused on automation, programming, and system design."
      ],
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Career <span className="text-cyan-400">Path</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A journey of growth, learning, and contribution in the software industry.
            </p>
            
            <div className="mt-12 space-y-6">
               <div className="glass p-6 rounded-2xl border border-white/5">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Certification</p>
                  <p className="text-white font-bold">Microsoft Certified: Azure AZ-900</p>
               </div>
               <div className="glass p-6 rounded-2xl border border-white/5">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Certification</p>
                  <p className="text-white font-bold">AI-900 & GH-300</p>
               </div>
               <div className="glass p-6 rounded-2xl border border-white/5">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Award</p>
                  <p className="text-white font-bold">ACE Award – Bright Beginner (Accenture)</p>
               </div>
            </div>
          </div>

          <div className="md:w-2/3 relative">
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-16 group">
                  <div className="absolute left-[-4px] md:left-2.5 top-0 w-3 h-3 rounded-full bg-cyan-400 border-4 border-black group-hover:scale-150 transition-transform"></div>
                  
                  <div className="glass p-8 rounded-3xl border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500">
                    <span className="text-cyan-400 text-sm font-mono mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-gray-400 font-medium mb-6">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-cyan-400 mt-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
