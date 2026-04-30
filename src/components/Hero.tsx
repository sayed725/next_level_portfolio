"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ArrowRight, FileText, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  { icon: <Facebook size={20} />, href: "https://facebook.com" },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    href: "https://wa.me/yournumber"
  },
];

export default function Hero() {
  return (
    <main id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-5 lg:pb-0 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Background Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-lg items-center relative z-10">
        {/* Left Content: Hero Info */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-4 lg:gap-md text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-primary/20"
          >
            <span className="text-primary font-label-sm tracking-widest text-[12px]">WELCOME TO MY PORTFOLIO</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-headline-lg text-white "
            >
              Hi, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display-xl text-gradient block"
            >
              Abu Sayed Khan
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-headline-md text-white min-h-[40px] sm:min-h-[48px]"
            >
              A <span className="text-primary">
                <Typewriter
                  words={[" Web Developer", " Front-end Developer", " MERN Stack Developer", " React.Js Developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body-lg text-on-surface-variant max-w-2xl"
          >
            I am a professional Full Stack Web Developer with a strong experience in modern web technologies. I specialize in building high-performance applications using React, Next.js, Node.js, and MongoDB, Prisma ORM with a focus on clean code and exceptional user experience.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 sm:gap-4 py-4 justify-center lg:justify-start"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-primary hover:text-on-primary transition-all duration-300"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 sm:gap-md pt-2 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact">
                <Button size={"lg"} className="px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base font-semibold shadow-lg hover:shadow-blue-500/40 transition-all bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0">
                  Hire Me
                  <ArrowRight className="" />
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://drive.google.com/file/d/1PmvV2Qvc91vln-PNYMysX0BeczAh4Hlo/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button size={"lg"} variant="outline" className="w-full px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base font-semibold glass-card border-white/10 text-white hover:bg-white/5 transition-all">
                  <FileText className="" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Glowing Ring Container */}
          <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full p-1.5 bg-gradient-to-tr from-primary via-secondary to-primary shadow-2xl">
            <div className="w-full h-full rounded-full bg-background overflow-hidden relative border-4 border-background">
              <img
                alt="Abu Sayed Khan"
                className="w-full h-full object-cover"
                src="/sayed_hero_section_pic.png"
              />
            </div>

            {/* Tech Badges (Floating) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-4 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-xl flex items-center justify-center shadow-2xl px-2 neon-glow-primary"
            >
              <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [-12, -15, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-4 sm:-left-8 w-10 h-10 sm:w-14 sm:h-14 glass-card rounded-xl flex items-center justify-center shadow-2xl p-2 border-secondary/30"
            >
              <svg viewBox="0 0 180 180" className="w-6 h-6 sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg">
                <circle cx="90" cy="90" r="90" fill="black" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                <rect x="115" y="54" width="12" height="72" fill="white" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-1/4 glass-card  rounded-full shadow-2xl border-white/20"
            >
              <Button size={"sm"} className="rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0 hover:shadow-lg hover:shadow-blue-500/40 transition-all font-label-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Full Stack
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Scroll to Explore */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex flex-col items-center gap-3 mt-10"
      >
        <span className="text-gray-400 text-sm tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </main>
  );
}
