"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Master of Business Administration (MBA)",
    institution: "Kabi Najrul Govt College (Under Dhaka University)",
    duration: "Jan 2021 – Dec 2022",
    status: "Graduated",
    description:
      "An advanced degree focusing on leadership, strategy, and business operations in a global context.",
    gradient: "from-blue-500 to-violet-600",
  },
  {
    id: 2,
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Kabi Najrul Govt College (Under Dhaka University)",
    duration: "Jan 2017 – Dec 2021",
    status: "Graduated",
    description:
      "A comprehensive program covering key areas of business, such as management, marketing, and finance.",
    gradient: "from-violet-500 to-pink-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-10 relative px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-primary font-label-sm tracking-widest text-[12px]">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A strong academic foundation in business administration, complementing my technical expertise in web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-start sm:items-center gap-6 sm:gap-10`}
              >
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${edu.gradient} flex items-center justify-center shadow-lg shadow-blue-500/20`}
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`w-full sm:w-[calc(50%-2.5rem)] glass-card rounded-2xl p-5 sm:p-7 group cursor-default transition-all duration-300 hover:border-primary/20 ${
                    index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {/* Status Badge */}
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                    <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 font-medium uppercase tracking-wider">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 align-middle" />
                      {edu.status}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className={`flex items-center gap-2 mb-1 text-gray-300 text-sm ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {edu.institution}
                  </div>

                  {/* Duration */}
                  <div className={`flex items-center gap-2 mb-4 text-gray-500 text-xs ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    {edu.duration}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    &ldquo;{edu.description}&rdquo;
                  </p>
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
