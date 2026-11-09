"use client";

import { motion } from "framer-motion";
import { Cpu, Network, Shield, Terminal, Check } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

export default function SkillsMatrix() {
  const icons = [Network, Cpu, Shield, Terminal];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950/50">
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
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Technical Stack Matrix
              </h2>
              <p className="text-xs sm:text-sm text-blue-400 font-mono mt-0.5">
                // Multi-Vendor Hardware & Network Engineering Stack
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-100">
                        {cat.category}
                      </h3>
                    </div>

                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {cat.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
