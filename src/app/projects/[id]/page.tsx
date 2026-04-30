"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  AlertTriangle,
  Lightbulb,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    { src: project.homeImage, alt: project.name },
    ...project.images,
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 font-medium uppercase tracking-wider">
              {project.category === "fullstack" ? "Full Stack" : "Frontend"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {project.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">{project.title}</p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-3 sm:p-4 mb-8"
        >
          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
            <Image
              src={allImages[currentImage].src}
              alt={allImages[currentImage].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            {/* Navigation arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? allImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === allImages.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    currentImage === i
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Description & Features */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-5 sm:p-7"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                About This Project
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </motion.div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-2xl p-5 sm:p-7"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Key Features
                </h2>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="glass-card rounded-2xl p-5 sm:p-7"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Challenges Faced
                </h2>
                <ul className="space-y-2.5">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Improvements */}
            {project.improvementsNeeded &&
              project.improvementsNeeded.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="glass-card rounded-2xl p-5 sm:p-7"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    Future Improvements
                  </h2>
                  <ul className="space-y-2.5">
                    {project.improvementsNeeded.map((improvement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-card rounded-2xl p-5 sm:p-7"
            >
              <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {project.links && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-2xl p-5 sm:p-7 space-y-3"
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  Project Links
                </h2>
                {project.links.livePreview && (
                  <a
                    href={project.links.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </Button>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-lg glass-card border-white/10 text-white hover:bg-white/5 transition-all mt-3"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Repository
                    </Button>
                  </a>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
