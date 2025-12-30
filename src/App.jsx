import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Code2,
  Globe,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,  
  Cpu,
  Terminal,
  MessageSquare, Instagram, Github, Mail
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Logo } from './components/Logo';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};




function App() {

  const [status, setStatus] = React.useState("Connecting...");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("Server Online");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  // 🔹 Web3Forms submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      "aa283801-0d37-48e8-82a0-a085ee8b0fb1"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: "success",
          text: "Transmission complete. Our engineering team will reach out shortly."
        });
        e.target.reset();
      } else {
        setResult({
          type: "error",
          text: "Transmission failed. Please retry or contact us directly."
        });
      }
    } catch (error) {
      setResult({
        type: "error",
        text: "Network unavailable. Check connectivity and try again."
      });
    }

    setLoading(false);
  };


  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30">
      <Background />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-cyan-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">Accepting New Projects</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Building <span className="text-gradient">Scalable</span> <br />
                Software Solutions
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We engineer enterprise-grade applications with Java, Node.js, and React.
                Transforming complex ideas into seamless digital experiences.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="#contacts">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 w-full sm:w-auto">
                    Get a Quote
                  </button>
                </a>
                <a href="#services">
                  <button className="px-8 py-4 rounded-xl glass-panel border border-white/10 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                    View Services <ArrowRight size={18} />
                  </button>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <Terminal size={20} className="text-cyan-500" />
                  <span className="text-sm font-mono">Backend Logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={20} className="text-violet-500" />
                  <span className="text-sm font-mono">Data Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={20} className="text-blue-500" />
                  <span className="text-sm font-mono">API Integration</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual/3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Floating Cards simulating 3D depth */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-64 h-40 glass-card rounded-2xl p-6 z-20 border-l-4 border-l-cyan-400"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400"><Server size={20} /></div>
                    <p className="text-sm font-mono text-green-400">{status}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-2 text-xs font-mono text-gray-400">
                      <div className="mt-4 grid grid-cols-2 gap-6 text-xs font-mono text-gray-400">
                        <div className="flex flex-col">
                          <p className="text-cyan-400 text-lg font-bold leading-none">99.9%</p>
                          <span className="mt-1 tracking-wide">Uptime</span>
                        </div>

                        <div className="flex flex-col">
                          <p className="text-violet-400 text-lg font-bold leading-none">&lt;120ms</p>
                          <span className="mt-1 tracking-wide">Latency</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 w-72 h-48 glass-card rounded-2xl p-6 z-30 border-l-4 border-l-violet-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400"><Code2 size={20} /></div>
                    <span className="text-xs text-green-400 font-mono">● Active</span>
                  </div>
                  <div className="font-mono text-xs text-gray-400 space-y-2">
                    <p><span className="text-violet-400">const</span> <span className="text-blue-400">app</span> = <span className="text-yellow-400">express</span>();</p>
                    <p>app.<span className="text-blue-400">listen</span>(<span className="text-orange-400">3000</span>);</p>
                    <p className="text-gray-600">// Server initialized</p>
                  </div>
                </motion.div>

                {/* Background Glow behind cards */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-[80px] -z-10" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core <span className="text-gradient">Services</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">High-performance engineering for mission-critical systems.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Server className="w-8 h-8 text-cyan-400" />,
                  title: "Java Spring Boot",
                  desc: "Robust, enterprise-level backend development designed for scalability and security."
                },
                {
                  icon: <Globe className="w-8 h-8 text-violet-400" />,
                  title: "Node.js & Express",
                  desc: "Fast, non-blocking API development perfect for real-time applications and microservices."
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-400" />,
                  title: "Database Solutions",
                  desc: "Optimized MySQL and PostgreSQL architectures ensuring data integrity and speed."
                },
                {
                  icon: <Code2 className="w-8 h-8 text-pink-400" />,
                  title: "React Applications",
                  desc: "Modern, interactive frontends built with React.js, Next.js, and Tailwind CSS."
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Custom Software",
                  desc: "Tailor-made software solutions addressing your unique business challenges."
                },
                {
                  icon: <Layers className="w-8 h-8 text-green-400" />,
                  title: "API Integration",
                  desc: "Seamless third-party integrations and RESTful API development."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none" />

          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why <span className="text-cyan-400">DevstudioX</span>?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We don't just write code; we architect solutions. Our focus on clean architecture and performance ensures your product scales with your business.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Enterprise-Grade Security", desc: "Built with industry-standard security practices from day one." },
                  { title: "Scalable Architecture", desc: "Systems designed to handle growth without technical debt." },
                  { title: "Agile Delivery", desc: "Rapid iteration cycles with transparent communication." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">server_status.log</span>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="flex gap-4">
                    <span className="text-gray-500">10:42:01</span>
                    <span className="text-green-400">SUCCESS</span>
                    <span className="text-gray-300">Database connection established</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500">10:42:02</span>
                    <span className="text-blue-400">INFO</span>
                    <span className="text-gray-300">Microservices initialized</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500">10:42:03</span>
                    <span className="text-violet-400">SYSTEM</span>
                    <span className="text-gray-300">Load balancer active</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500">10:42:04</span>
                    <span className="text-cyan-400">READY</span>
                    <span className="text-gray-300">Application serving requests</span>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Our <span className="text-gradient">Tech Stack</span></h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Java', 'Spring Boot', 'Node.js', 'Express.js', 'React', 'JavaScript', 'MySQL', 'MongoDB', 'Tailwind', 'Bootstrap', 'Prisma', 'Hibernate'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="px-6 py-3 rounded-full glass-panel border border-white/10 text-gray-300 font-medium cursor-default hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contacts' className="py-24 px-6 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Let's Build Your Product
                </h2>
                <p className="text-gray-400">
                  Ready to transform your business? Get in touch with our engineering team.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6 max-w-xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:bg-black/40 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:bg-black/40 transition-all text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:bg-black/40 transition-all text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <MessageSquare
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {result && (
                  <div
                    className={`mt-4 px-4 py-3 rounded-xl text-sm font-mono text-center border backdrop-blur-md
                        ${result.type === "success"
                        ? "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
                        : "text-red-400 border-red-500/30 bg-red-500/10"
                      }`}
                  >
                    {result.text}
                  </div>
                )}

              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <div className="text-gray-500 text-sm">
              © 2025 DevstudioX. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/devstudiox.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-white/10
                text-gray-400 hover:text-pink-400
                hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]
                transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/devstudioxio-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-white/10
                text-gray-400 hover:text-white
                hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:devstudiox.io@gmail.com"
                className="p-3 rounded-xl glass-panel border border-white/10
                text-gray-400 hover:text-cyan-400
                hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]
                transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>

          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
