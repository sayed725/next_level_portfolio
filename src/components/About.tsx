"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, MapPin, Briefcase, FolderKanban, GraduationCap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: <FolderKanban className="w-6 h-6" />,
    value: "20+",
    label: "Projects Completed",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    value: "3+",
    label: "Courses Completed",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "20+",
    label: "Technologies Known",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "2+",
    label: "Years Experience",
    color: "from-red-500 to-orange-400",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 sm:px-6 py-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-4 sm:p-6 md:p-10 mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex flex-col items-center"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[300px] sm:h-[350px] lg:h-full lg:min-h-[300px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl mx-auto">
                <Image
                  src="/sayed_cover_photo.jpg"
                  alt="Abu Sayed Khan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                {/* Online indicator */}
                <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-yellow-400 border-2 border-background shadow-lg shadow-yellow-400/40"></div>
              </div>
              {/* Full Stack Developer Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass-card rounded-md px-3 py-2.5 lg:-right-30 -mt-8 relative z-10 flex items-center gap-2 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">Full Stack</p>
                  <p className="text-gray-400 text-xs">Developer</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Text Content */}
            <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-primary font-label-sm tracking-widest text-[12px]">GET TO KNOW ME</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>

              {/* Quote Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -top-2 -left-2 text-4xl text-gray-600 font-serif">&ldquo;</span>
                <p className="text-gray-300 pl-6 pr-6 leading-relaxed text-sm sm:text-base">
                  Hello, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">Abu Sayed Khan</span>, a passionate{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">Full Stack Developer</span> who finds joy in crafting
                  beautiful and functional web applications.
                </p>
                <span className="absolute -bottom-4 right-0 text-4xl text-gray-600 font-serif">&rdquo;</span>
              </motion.div>

              {/* Bio Paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base"
              >
                <p>
                  My programming journey began with challenges, but my determination to become a web developer
                  never wavered. Through perseverance and continuous learning, I&apos;ve developed expertise in modern web
                  technologies and completed comprehensive training at{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">Programming Hero</span>.
                </p>
                <p>
                  Every project I complete brings immense satisfaction, especially when overcoming complex challenges
                  through hard work and dedication. Outside of coding, I&apos;m passionate about cricket, which teaches me
                  teamwork and strategic thinking that I apply to my development work.
                </p>
              </motion.div>

              {/* Location & Experience Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
              >
                <div className="glass-card rounded-xl px-5 py-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-white font-semibold">Bangladesh</p>
                  </div>
                </div>
                <div className="glass-card rounded-xl px-5 py-4 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Experience</p>
                    <p className="text-white font-semibold">2+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-3 sm:p-4 text-center group cursor-default"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
