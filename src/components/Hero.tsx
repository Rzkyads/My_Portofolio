"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Github, Linkedin, ExternalLink, ArrowRight, Activity, Server, ShieldAlert, Award } from "lucide-react";
import { personalInfo, metrics } from "@/data/portfolio";

export default function Hero() {
  const metricIcons = [Server, Activity, ShieldAlert, Award];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60 bg-slate-950">
      {/* Background Soft Glow & Grid (Biru Navy) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          {/* Status Badge - Blue Modern */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>{personalInfo.badge}</span>
          </div>

          {/* Hero Title & Subtitle */}
          <div className="max-w-4xl space-y-2 mb-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              {personalInfo.title}
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-normal">
            {personalInfo.summary}
          </p>

          {/* Buttons & Action */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="/cv-rizky-ade-satriya.pdf"
              download="RIZKY_ADE_SATRIYA_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
            >
              <Server className="w-4 h-4 text-blue-400" />
              <span>Lihat Proyek & Lab</span>
            </a>

            <div className="flex items-center gap-2 ml-0 sm:ml-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:text-blue-400 hover:border-blue-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:text-blue-400 hover:border-blue-500/40 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Info Contact Baris - Clean Grid */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pb-10 border-b border-slate-800/80 mb-10 w-full">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </motion.div>

        {/* 4 Cards Stats - Clean Corporate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-md hover:border-blue-500/40 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1 flex items-center justify-between">
                  <span>{item.label}</span>
                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
