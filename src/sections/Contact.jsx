import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate sending, then trigger mailto
    setTimeout(() => {
      // Connect to mailto to launch mail client
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // TODO: Connect this to Formspree, Web3Forms, or FormBold. 
      // Example for Formspree: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(formData) })
      
      window.location.href = `mailto:jagadeeshveeranki30@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success status after 5s
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 md:px-12 bg-slate-500/5">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Contact Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                Let's discuss your next project
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Whether you have an opening, a question, or a project collaboration idea, feel free to reach out. I am highly responsive and available to connect.
              </p>
            </div>

            {/* Detail Blocks */}
            <div className="space-y-4 my-8">
              
              {/* Email */}
              <div className="glass-card p-4 flex items-center gap-4 hover:border-primary-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Me</span>
                  <a href="mailto:jagadeeshveeranki30@gmail.com" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mt-0.5">
                    jagadeeshveeranki30@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-4 flex items-center gap-4 hover:border-primary-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Call Me</span>
                  <a href="tel:+916302471838" className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mt-0.5">
                    +91 6302471838
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-4 flex items-center gap-4 hover:border-primary-500/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Location</span>
                  <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Naguladevunipadu, India
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Profiles links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-3 flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 font-semibold text-xs"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-3 flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 font-semibold text-xs"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 h-full flex flex-col justify-between"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all text-sm resize-none"
                  />
                </div>

                {/* Status Banners */}
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-red-500/10 dark:bg-red-500/5 border border-red-500/20 text-red-500 rounded-xl text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Success! Launching your mail client...</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white font-semibold transition-all duration-300 shadow-md shadow-violet-500/10 flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
