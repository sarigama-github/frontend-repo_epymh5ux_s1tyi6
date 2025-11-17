import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0A0A12] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 p-10 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_10%,rgba(124,58,237,0.15),transparent),radial-gradient(700px_350px_at_90%_90%,rgba(34,211,238,0.12),transparent)]" />
          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              See GT Copilot on your Salesforce data
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-white/80 max-w-2xl"
            >
              We connect in minutes using OAuth. No heavy lift. No code. Your sandbox stays safe.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll reach out shortly.'); }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
            >
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
              >
                Request access
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
