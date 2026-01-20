
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const roles = ["Full Stack .NET Developer", "Angular Specialist", "Cloud Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      const typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full glass border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
            Available for new opportunities
          </div>
          
          <div className="space-y-4">
            <h2 className="text-gray-400 text-xl md:text-2xl font-medium">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              James Vasanth<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Prabahar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-mono text-cyan-500 h-10">
              {text}<span className="animate-ping">|</span>
            </p>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            A results-driven Full Stack Developer with 3.3 years of experience at Accenture. 
            I build enterprise-grade web applications using the .NET ecosystem, Angular, and Azure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/25">
              Contact Me
            </a>
            <a href="/resume.pdf" download="resume.pdf" className="px-8 py-4 rounded-xl glass border border-white/10 font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1">
              Download CV
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-8">
            <a href="https://github.com/jamesvasanth200501" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/james-vasanth-p-b65024191/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative p-4">
             <div className="w-full aspect-square rounded-3xl glass border border-white/10 overflow-hidden relative group">
                <img src="/portfolio/profile.jpg" alt="Professional Portrait Placeholder" className="w-full h-full object-cover opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-bold text-xl">James V. Prabahar</p>
                  <p className="text-cyan-400 font-mono text-sm">Full Stack .NET Developer</p>
                </div>
             </div>
          </div>
          {/* Decorative badges */}
          <div className="absolute -top-4 -right-4 glass p-6 rounded-2xl border border-white/10 shadow-2xl animate-float">
            <p className="text-3xl font-black text-white">3.3+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
          </div>
          {/* <div className="absolute -bottom-4 -left-4 glass p-6 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{animationDelay: '1s'}}>
            <p className="text-3xl font-black text-white">20+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">User Stories Delivered</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
