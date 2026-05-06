"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Code2,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Dhaka, Bangladesh",
    subtitle: "Nawabjong, Dhaka 1320",
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "+8801627142598",
    subtitle: "Sun to Thu 9am to 8pm",
    color: "text-violet-400",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "abusayedkhan.pro@gmail.com",
    subtitle: "Send me query anytime!",
    color: "text-pink-400",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "+8801627142598",
    subtitle: "WhatsApp — Available 24/7!",
    color: "text-green-400",
    gradient: "from-green-500 to-emerald-400",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, { publicKey })
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", JSON.stringify(error, null, 2));
        console.error("EmailJS error text:", error?.text || error?.message || "Unknown error");
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-10 lg:py-20 relative mx-auto w-11/12 container max-w-7xl">
      <div className="">
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
              REACH OUT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to new opportunities.
          </p>
        </motion.div>    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group w-full">
              {/* Background Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500" />
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Let&apos;s talk about everything!
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
                  Don&apos;t like forms? Send me an email or reach out via
                  WhatsApp. I&apos;m usually very responsive. 👋
                </p>

                <div className="space-y-1">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all duration-300 cursor-default group/item"
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-bold text-sm sm:text-base mb-0.5 break-all sm:break-normal">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden w-full flex flex-col justify-between"
            >
              {/* Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500/10 blur-[80px] rounded-full" />

              <div className="relative space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Abu Sayed Khan"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm sm:text-base focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 appearance-none"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm sm:text-base focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 appearance-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2.5">
                  <label className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm sm:text-base focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 appearance-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2.5">
                  <label className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm sm:text-base focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white border-0 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-base font-bold gap-3 overflow-hidden relative group"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="tracking-wide">SENDING...</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span className="tracking-wide relative">SEND MESSAGE</span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
