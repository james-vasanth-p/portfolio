
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["C#", "ASP.NET Core", "Web API", "Entity Framework", "LINQ", "Microservices", "RESTful APIs", "Node.js"]
    },
    {
      title: "Frontend Development",
      skills: ["Angular (v13-18)", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular Material"]
    },
    {
      title: "Database & Cloud",
      skills: ["SQL Server", "MySQL", "Azure Fundamentals", "Azure DevOps", "CI/CD Pipelines", "Stored Procedures"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "GitHub Copilot", "Postman", "TFS", "Agile Scrum", "SOLID Principles", "JWT/OAuth 2.0"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical <span className="text-cyan-400">Toolkit</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-3xl border border-cyan-500/20 text-center">
            <h4 className="text-white font-bold mb-6">Learning & Evolution</h4>
            <div className="flex justify-center flex-wrap gap-8 items-center grayscale opacity-50">
               <span className="text-xl font-bold font-mono">.NET 9.0</span>
               <span className="text-xl font-bold font-mono">React</span>
               <span className="text-xl font-bold font-mono">Docker</span>
               <span className="text-xl font-bold font-mono">Kubernetes</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
