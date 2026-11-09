"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, AlertCircle, TrendingUp, CheckCircle2, FolderGit2, Layers } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-950 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Featured Projects & Labs
            </h2>
            <p className="text-xs sm:text-sm text-blue-400 font-mono mt-0.5">
              // Real-World Network Deployment & Automation Case Studies
            </p>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden backdrop-blur-md transition-all hover:border-blue-500/40"
            >
              {/* Preview Image (Jika Ada) */}
              {project.image && (
                <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] bg-slate-950 border-b border-slate-800/80 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Header Badge & Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400">
                      {project.company} | {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.type}</span>
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/90 border border-slate-700/80 rounded-lg hover:bg-slate-700 hover:text-white transition-all shadow-sm"
                        title="View Source Code on GitHub"
                      >
                        <Github className="w-4 h-4 text-blue-400" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Challenge & Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold tracking-wider uppercase mb-2">
                      <AlertCircle className="w-4 h-4" />
                      Tantangan
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-bold tracking-wider uppercase mb-2">
                      <TrendingUp className="w-4 h-4" />
                      Hasil & Impact
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Solutions List */}
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-wider uppercase text-blue-400 mb-3">
                    Solusi & Eksekusi Teknis
                  </div>
                  <ul className="space-y-2">
                    {project.solutions.map((sol, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-medium text-slate-400 mr-2">Tech Stack:</span>
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
