"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Github, Linkedin, Send, Terminal, Server, Activity, ShieldAlert, Award } from "lucide-react";
import { personalInfo, metrics } from "@/data/portfolio";

export default function Hero() {
  const metricIcons = [Server, Activity, ShieldAlert, Award];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-16 bg-slate-950 overflow-hidden">
      {/* Background Soft Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Layout Grid 2 Kolom (Teks & Foto) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Kolom Kiri: Deskripsi & Perkenalan */}
          <div className="lg:col-span-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {personalInfo.badge}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.summary}
            </p>

            {/* Buttons & Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4" />
                Lihat Proyek & Lab
              </a>
              <a
                href="/cv-rizky-ade-satriya.pdf"
                download="RIZKY_ADE_SATRIYA_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download Resume
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://t.me/Rzkyads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  title="Telegram (@Rzkyads)"
                >
                  <Send className="w-4 h-4" />
                </a>
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
          </div>

          {/* Kolom Kanan: Frame Foto Profile */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow Accent di Belakang Foto */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Container Foto */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

        </div>

        {/* Info Contact Baris - Clean Grid */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pb-10 border-b border-slate-800/80 mb-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{personalInfo.email}</span>
          </a>
          <a href="https://t.me/Rzkyads" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors">
            <Send className="w-4 h-4 text-sky-400" />
            <span>Telegram: @Rzkyads</span>
          </a>
          <a href={`tel:${personalInfo.phoneLink}`} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>{personalInfo.phone}</span>
          </a>
        </div>

        {/* 4 Cards Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-md hover:border-blue-500/40 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-slate-200 mb-1 flex items-center justify-between">
                  <span>{item.label}</span>
                  <Icon className="w-4 h-4 text-slate-500" />
                </div>
                <div className="text-xs text-slate-400">{item.description}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
