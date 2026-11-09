"use client";

import { motion } from "framer-motion";
import { Network, Cpu, ShieldCheck, UserCheck } from "lucide-react";
import { aboutData } from "@/data/portfolio";

export default function About() {
  const icons = [Network, Cpu, ShieldCheck];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                About Me
              </h2>
              <p className="text-xs sm:text-sm text-blue-400 font-mono mt-0.5">
                // Background & Core Capabilities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                {aboutData.paragraph1}
              </div>
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                {aboutData.paragraph2}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Pilar Keahlian Utama
              </h3>
              <div className="space-y-3">
                {aboutData.strengths.map((item, idx) => {
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/30 transition-colors flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-slate-100 font-semibold text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
