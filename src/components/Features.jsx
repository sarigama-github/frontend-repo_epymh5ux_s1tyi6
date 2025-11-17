import { motion } from 'framer-motion'
import { Brain, Bot, ShieldCheck, LayoutGrid } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Predictive Pipeline',
    desc: 'Forecast with precision using multi-signal models trained on your GTM data.'
  },
  {
    icon: Bot,
    title: 'AI Playbooks',
    desc: 'Auto-generate sequences, emails, and call scripts aligned to ICP and intent.'
  },
  {
    icon: ShieldCheck,
    title: 'Governed Automation',
    desc: 'Human-in-the-loop approvals, policy checks, and full auditability built-in.'
  },
  {
    icon: LayoutGrid,
    title: 'Unified Workspace',
    desc: 'One canvas for reps, CSMs, and RevOps spanning Salesforce, Slack, and data apps.'
  },
]

export default function Features() {
  return (
    <section id="product" className="relative bg-[#0B0B14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            Everything GT teams need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            Ship faster, sell smarter, and retain more with an AI-first stack wired to Salesforce.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 grid place-items-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
