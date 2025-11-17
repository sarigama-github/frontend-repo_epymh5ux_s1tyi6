import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0A0A12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(34,211,238,0.18),transparent)] pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-36 md:pt-40 lg:pt-44 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              Introducing GT Copilot for Salesforce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05 }}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-white/60 text-transparent bg-clip-text"
            >
              Build revenue machines with AI-native workflows
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-white/70"
            >
              Orchestrate leads, pipeline, and customer journeys across Sales Cloud, Service, and Slack. Automate everything with guardrailed AI that your RevOps will love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
              >
                Book a live demo
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-semibold text-white/90 hover:bg-white/15"
              >
                Explore the platform
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-8 grid grid-cols-2 sm:flex items-center gap-6 text-white/60"
            >
              {['Sales Cloud', 'Service', 'Slack', 'MuleSoft', 'Tableau'].map((logo) => (
                <div key={logo} className="text-xs md:text-sm">{logo}</div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
