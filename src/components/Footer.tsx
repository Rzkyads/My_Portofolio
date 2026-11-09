"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ShieldAlert } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-12 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Mari Berdiskusi tentang Infrastruktur Jaringan Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Apakah Anda membutuhkan bantuan untuk merancang arsitektur jaringan ISP, implementasi BGP/BFD redundancy, atau pengerasan keamanan infrastruktur multi-vendor?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-mono text-slate-400">Email Direct</p>
                <p className="text-sm font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">WhatsApp</p>
                <p className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-mono text-slate-400">LinkedIn Profile</p>
                <p className="text-sm font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                  linkedin.com/in/rizkyadesatriya
                </p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-mono text-slate-400">GitHub Profile</p>
                <p className="text-sm font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                  github.com/Rzkyads
                </p>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 sm:col-span-2 lg:col-span-2">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Lokasi Utama</p>
                <p className="text-sm font-semibold text-slate-100">
                  Rawalumbu, Kota Bekasi, Jawa Barat
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-blue-400" />
              <span>© 2026 Rizky Ade Satriya. Built for Network Resilience & Security.</span>
            </div>
            <p className="font-mono text-slate-400">
              ISP Managed Services & High-Availability Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
