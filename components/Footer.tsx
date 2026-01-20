
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} James Vasanth Prabahar. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-8">
           <a href="#home" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-widest">Home</a>
           <a href="#about" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-widest">About</a>
           <a href="#projects" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-widest">Work</a>
        </div>

        <div className="text-gray-600 text-xs font-mono">
          Ph: +91 74021 26138 ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
