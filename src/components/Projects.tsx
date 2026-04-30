"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Folder, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const tabs = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage, activeTab]);

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  return (
    <section id="projects" className="py-10 lg:py-20 relative px-4 sm:px-6">
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
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-primary font-label-sm tracking-widest text-[12px]">
              MY WORK
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of my recent work showcasing full-stack and frontend
            expertise.
          </p>
        </motion.div>

        {/* Tab System */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center glass-card rounded-md p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`relative px-5 sm:px-7 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === tab.value
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
              <Folder className="w-10 h-10 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-sm mx-auto">
              I haven't added any projects in the <span className="text-primary font-medium">{activeTab}</span> category yet. Stay tuned for updates!
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="block group cursor-default h-full">
                    <div className="glass-card rounded-2xl overflow-hidden border-white/10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-44 sm:h-60 overflow-hidden flex-shrink-0">
                        <Image
                          src={project.homeImage}
                          alt={project.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 2}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-primary/20 text-white backdrop-blur-md border border-primary/20 font-medium uppercase tracking-wider">
                            {project.category === "fullstack"
                              ? "Full Stack"
                              : "Frontend"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                          {project.title}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
                          <div className="flex flex-wrap gap-1.5 h-fit">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/5"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500">
                                +{project.techStack.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <Link href={`/projects/${project.id}`} className="w-full">
                            <Button
                              className="w-full rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0 hover:shadow-lg hover:shadow-blue-500/40 transition-all text-xs sm:text-sm h-9 sm:h-10 gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              Details
                            </Button>
                          </Link>

                          {project.links?.livePreview ? (
                            <a
                              href={project.links.livePreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full"
                            >
                              <Button
                                variant="outline"
                                className="w-full rounded-md border-white/10 glass-card text-white hover:bg-white/5 transition-all text-xs sm:text-sm h-9 sm:h-10 gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Preview
                              </Button>
                            </a>
                          ) : (
                            <Button
                              variant="outline"
                              disabled
                              className="w-full rounded-md border-white/10 glass-card text-gray-500 cursor-not-allowed text-xs sm:text-sm h-9 sm:h-10 gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-md border-white/10 glass-card text-white hover:bg-white/5 transition-all text-sm h-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </Button>
            <div className="glass-card px-4 py-2 rounded-md text-gray-300 text-sm font-medium border-white/10 flex items-center justify-center min-w-[100px]">
              {currentPage} / {totalPages}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-md border-white/10 glass-card text-white hover:bg-white/5 transition-all text-sm h-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
