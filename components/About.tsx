
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-cyan-500 rounded-full mb-8"></div>
            <p className="text-gray-400 leading-loose text-lg italic">
              "Focusing on building scalable enterprise solutions with a strong emphasis on clean code and SOLID principles."
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-10">
            <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack .NET Developer with <strong className="text-cyan-400">3.3 years of experience</strong> at <strong className="text-white">Accenture</strong> in developing and maintaining robust web applications. I specialize in the modern .NET ecosystem, particularly ASP.NET Core and Web API.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey involves hands-on experience in building RESTful APIs, working with microservices-based systems, and supporting cloud-native deployments on Microsoft Azure. I have a proven track record of delivering end-to-end user stories in fast-paced Agile Scrum environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <h4 className="text-cyan-400 font-bold text-xl mb-4">Tech Mindset</h4>
                <p className="text-gray-400 leading-relaxed">
                  I believe in the power of SOLID principles and clean architecture. My focus is on creating maintainable, testable, and efficient codebases that solve real business problems.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <h4 className="text-cyan-400 font-bold text-xl mb-4">Problem Solving</h4>
                <p className="text-gray-400 leading-relaxed">
                  From optimizing SQL queries to architecting microservices, I enjoy tackling complex technical challenges. My goal is to always deliver high-performance, user-centric solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 pt-8">
              <div>
                <p className="text-4xl font-black text-white">B.E.</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Mechatronics Engineering</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">8.89</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">CGPA (Distinction)</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">ACE</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Award Winner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
