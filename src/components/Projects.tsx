"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, Stripe, and Tailwind CSS.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "/project1.jpg", // Placeholder
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates using Socket.io.",
    tags: ["React", "Node.js", "Socket.io"],
    image: "/project2.jpg", // Placeholder
    demo: "#",
    github: "#"
  },
  {
    title: "AI Content Generator",
    description: "Generate marketing copy using OpenAI GPT-3 API.",
    tags: ["Next.js", "OpenAI", "Vercel"],
    image: "/project3.jpg", // Placeholder
    demo: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all h-full flex flex-col">
                <div className="h-48 bg-gray-800 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Project Preview
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button size="sm" variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0">
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
