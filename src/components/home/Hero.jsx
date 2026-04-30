"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#F0F7F7]">
      {/* Background Abstract Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <Star size={14} fill="currentColor" className="text-yellow-600" />
              <span className="text-xs font-bold uppercase tracking-widest">Special offer for first time customers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-[#1A2238]">
              Learn on your <br />
              schedule from <br />
              <span className="text-primary inline-flex items-center">
                any device <ArrowRight className="ml-4 w-12 h-12 md:w-16 md:h-16" />
              </span>
            </h1>
            <p className="text-lg text-base-content/60 mb-10 max-w-md leading-relaxed font-medium">
              Upgrade to a paid Premium plan and get a premium course creation bundle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/courses" className="btn btn-primary btn-lg rounded-2xl px-10 h-16 text-lg font-bold shadow-xl shadow-primary/30 border-none bg-orange-400 hover:bg-orange-500 text-white">
                Get started
              </Link>
              <button className="btn btn-ghost btn-lg rounded-2xl px-10 h-16 text-lg font-bold border-2 border-base-300 hover:bg-base-200">
                Discover
              </button>
            </div>

            {/* Partner Logos */}
            <div className="mt-20 pt-10 border-t border-base-300/50">
              <p className="text-[10px] text-base-content/40 font-bold uppercase tracking-[0.2em] mb-6">Over 2,000+ trusted partner around the world</p>
              <div className="flex flex-wrap gap-8 opacity-30 grayscale items-center">
                <span className="text-xl font-bold tracking-tighter">smartoro</span>
                <span className="text-xl font-bold tracking-tighter">adelfox</span>
                <span className="text-xl font-bold tracking-tighter">cesis</span>
                <span className="text-xl font-bold tracking-tighter">moyoshiro</span>
                <span className="text-xl font-bold tracking-tighter">thefox</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            {/* Main Image with floating elements */}
            <div className="relative z-20">
              <div className="relative rounded-[60px] overflow-hidden rotate-[-2deg] border-[12px] border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Student with laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Shapes from Screenshot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#A391FF] rounded-[40px] -z-10 rotate-12" />
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#FFD966] rounded-full -z-10 animate-pulse" />
              <div className="absolute bottom-10 -right-8 w-20 h-20 bg-[#82E1C1] rounded-full -z-10" />
              <div className="absolute -bottom-12 left-20 w-40 h-40 border-4 border-primary/20 rounded-full -z-10" />
            </div>

            {/* Floating UI Card */}
            <div className="absolute top-10 -left-16 bg-white p-6 rounded-3xl shadow-2xl border border-base-100 z-30 rotate-[-5deg]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A2238]">Active Lessons</p>
                  <p className="text-xs text-base-content/60">12 ongoing courses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

