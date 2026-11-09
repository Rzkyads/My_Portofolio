"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, HeartHandshake } from "lucide-react";
import { experiences, education } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  Work Experience
                </h2>
                <p className="text-xs sm:text-sm text-blue-400 font-mono mt-0.5">
                  // Career Journey & Field Operations
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-6 sm:pl-8 group"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-all space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-semibold text-xs sm:text-sm">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  Education & Social Impact
                </h2>
                <p className="text-xs sm:text-sm text-blue-400 font-mono mt-0.5">
                  // Academic Excellence & Community Outreach
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {education.degree}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mt-0.5">
                      {education.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30">
                    IPK: {education.gpa}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-mono">
                  {education.period}
                </p>

                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Prestasi & Kegiatan:
                  </p>
                  <ul className="space-y-1.5">
                    {education.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {education.socialProjects.map((sp, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {sp.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {sp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
