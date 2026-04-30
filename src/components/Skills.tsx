"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Server, Wrench } from "lucide-react";

const frontend = [
  { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwindcss" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  { name: "ShadcnUi", icon: "https://skillicons.dev/icons?i=bash" },
];

const backend = [
  { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
  { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
];

const tools = [
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
  { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "VSCode", icon: "https://skillicons.dev/icons?i=vscode" },
  { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
  { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
];

const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: frontend,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: backend,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    skills: tools,
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10  relative px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-primary font-label-sm tracking-widest text-[12px]">
              MY EXPERTISE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-4 sm:p-6 transition-colors hover:border-primary/20 h-full flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6 flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-r  ${category.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Grid */}
              <div className="grid grid-cols-3 gap-3 flex-grow content-start">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + index * 0.04,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 cursor-default group h-full"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 relative group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)] transition-all duration-300">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                        sizes="48px"
                        unoptimized
                      />
                    </div>
                    <span className="text-gray-400 text-[11px] sm:text-xs font-medium text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
