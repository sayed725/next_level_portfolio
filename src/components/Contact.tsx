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
    <section id="contact" className="py-10 lg:py-20 relative px-4 sm:px-6">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-card rounded-2xl p-5 sm:p-7">
              <h3 className="text-xl font-bold text-white mb-2">
                Let&apos;s talk about everything!
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Don&apos;t like forms? Send me an email or reach out via
                WhatsApp. 👋
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-default group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-5 sm:p-7 space-y-5"
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Abu Sayed Khan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0 hover:shadow-lg hover:shadow-blue-500/40 transition-all text-sm sm:text-base font-semibold gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
