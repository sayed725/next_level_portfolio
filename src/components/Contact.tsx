"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400">
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <span>New York, NY</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <Input className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <Input className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Subject</label>
                  <Input className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <Textarea className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 min-h-[150px]" placeholder="Tell me about your project..." />
                </div>
                <Button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
