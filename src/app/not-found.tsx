"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-12 text-center overflow-hidden relative shadow-2xl"
        >
          {/* Animated 404 Header */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="relative mb-8"
          >
            <h1 className="text-7xl sm:text-9xl md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertCircle className="w-16 h-16 sm:w-24 md:w-32 text-primary opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient leading-tight">
              Lost in Space?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground  mx-auto">
              The page you are looking for has vanished into the digital void. 
              Don&apos;t worry, even the best explorers get lost sometimes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleGoBack}
                className="glass-card border-white/10 hover:bg-white/5 transition-all gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-foreground"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>
              <Link href="/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-2xl w-full"
                >
                  <Home className="w-5 h-5" />
                  Return Home
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none"></div>

          {/* Decorative Footer */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 relative z-10">
            <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground opacity-50">
              © {new Date().getFullYear()} Sayed&apos;s Portfolio
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}