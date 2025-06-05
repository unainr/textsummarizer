'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative mx-auto my-10 flex min-h-[80vh] max-w-7xl flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-indigo-50/50 dark:from-teal-950/20 dark:to-indigo-950/20" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Enhanced Side Lines with Glow */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-1/4 h-60 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
        <motion.div 
          className="absolute top-1/4 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.8)]"
          animate={{ y: [0, 240, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-1/4 h-60 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
        <motion.div 
          className="absolute top-1/4 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]"
          animate={{ y: [240, 0, 240] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Elements - Document-like shapes */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-32 w-24 rounded-lg bg-gradient-to-r from-teal-400/20 to-indigo-400/20 blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-24 w-20 rounded-lg bg-gradient-to-r from-indigo-400/20 to-teal-400/20 blur-xl"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Text particles effect */}
      <motion.div
        className="absolute left-1/3 top-1/3 text-xs font-mono text-teal-600/20 dark:text-teal-400/20"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          y: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="my-1">
            {Array.from({ length: Math.floor(Math.random() * 20) + 5 }).map((_, j) => (
              <span key={j}>•</span>
            ))}
          </div>
        ))}
      </motion.div>
     
      <div className="relative z-10 px-4 py-10 md:py-20">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/50 bg-teal-50/50 px-4 py-2 text-sm font-medium text-teal-700 backdrop-blur-sm dark:border-teal-800/50 dark:bg-teal-950/50 dark:text-teal-300">
            <div className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
            AI-Powered Text Summarization
          </div>
        </motion.div>

        {/* Enhanced Title */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-slate-800 md:text-5xl lg:text-7xl dark:text-slate-100">
          {"Distill complex text into"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-teal-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent"
          >
            clear, concise summaries
          </motion.span>
        </h1>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative z-10 mx-auto max-w-2xl py-6 text-center text-xl font-normal leading-relaxed text-neutral-600 dark:text-neutral-300"
        >
          Transform lengthy articles, research papers, and documents into{" "}
          <span className="font-semibold text-teal-600 dark:text-teal-400">accurate summaries</span>{" "}
          with our advanced NLP technology. Save time and extract key insights instantly.
        </motion.p>

        {/* Text Input Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mx-auto mb-10 mt-4 max-w-3xl rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-2 dark:border-neutral-800">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">Text Summarizer</div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex-1 rounded-lg bg-neutral-100 p-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                <div className="mb-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">Original Text</div>
                <div className="h-16 overflow-hidden">
                  The artificial intelligence revolution has transformed numerous industries, from healthcare to finance, 
                  enabling unprecedented automation and insights from complex data. As these technologies continue to evolve...
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                  →
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-teal-50 p-3 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
                <div className="mb-1 text-xs font-medium text-teal-600 dark:text-teal-400">Summary</div>
                <div className="h-16">
                  AI has revolutionized multiple industries by providing automation and data insights. These technologies continue to develop...
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-10 mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-64 overflow-hidden rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center justify-center gap-2">
                <Link href="/summarize" className="relative z-10">
              ✨ Summarize Now
              </Link>
            </span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group w-64 rounded-xl border-2 border-neutral-200 bg-white/80 px-8 py-4 font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
          >
            <span className="flex items-center justify-center gap-2">
              📚 View Examples
            </span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-teal-500" />
            <span>5M+ documents summarized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-indigo-500" />
            <span>98% accuracy rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <span>Supports 40+ languages</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
