"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Bio */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center group mb-4">
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors">&lt;</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">Sayed</span>
              <span className="text-gray-400 group-hover:text-violet-400 transition-colors">/&gt;</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              A passionate Full-Stack Developer specializing in building exceptional digital experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/sayed725" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="mailto:abusayedkhan.pro@gmail.com" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 flex flex-col md:items-center">
            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wider text-sm uppercase">Quick Links</h3>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Snippet */}
          <div className="col-span-1 md:col-span-1 flex flex-col md:items-end">
            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wider text-sm uppercase">Get in touch</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">
                  Dhaka, Bangladesh
                </li>
                <li className="text-gray-400 text-sm">
                  <a href="mailto:abusayedkhan.pro@gmail.com" className="hover:text-primary transition-colors">
                    abusayedkhan.pro@gmail.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  <a href="tel:+8801627142598" className="hover:text-primary transition-colors">
                    +880 1627-142598
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Abu Sayed Khan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Built By Me with Next.js & Tailwind</span>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
