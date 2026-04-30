"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", 
  "Tailwind CSS", "Node.js", "PostgreSQL", "Git",
  "Framer Motion", "Redux", "GraphQL", "Docker"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default text-gray-300 hover:text-white"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
