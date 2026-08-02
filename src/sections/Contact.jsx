import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import MorphingBackground from '../components/MorphingBackground';
import LiquidButton from '../components/LiquidButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', title: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear invalid field highlights on user typing
    if (invalidFields.includes(name)) {
      setInvalidFields((prev) => prev.filter((f) => f !== name));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvalidFields = [];

    if (!formData.name) newInvalidFields.push('name');
    if (!formData.email) newInvalidFields.push('email');
    if (!formData.title) newInvalidFields.push('title');
    if (!formData.message) newInvalidFields.push('message');

    if (newInvalidFields.length > 0) {
      setInvalidFields(newInvalidFields);
      setStatus('error');
      setErrorMessage('Please fill out all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setInvalidFields(['email']);
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    // Send the email using the exact EmailJS credentials requested
    emailjs.send(
      'service_uz96rgn',
      'template_shm5idp',
      {
        name: formData.name,
        email: formData.email,
        title: formData.title, // Subject line matching template variable
        message: formData.message
      },
      '7RoGA3HIX-KaZVKia'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
      setInvalidFields([]);
      // Reset toast back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please verify network or key validity.');
    });
  };

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/40 dark:border-zinc-850 bg-transparent">
      {/* Morphing Liquid Blobs Background (Ice Blue Theme) */}
      <MorphingBackground colorTheme="blue" />

      <div className="max-w-6xl mx-auto relative z-10 font-sans">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Contact
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 z-10">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white leading-tight">
                Let's discuss your next project.
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Whether you have an opening, a question, or a project collaboration idea, feel free to reach out. I am highly responsive and available to connect.
              </p>
            </div>

            {/* Detail Blocks */}
            <div className="space-y-4 my-6">
              
              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.015, x: 4, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
                className="glass-card p-4 flex items-center gap-4 hover:border-primary-505/30 transition-all duration-300 cursor-pointer select-none"
              >
                <div className="w-9 h-9 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center text-primary-505 dark:text-primary-300 flex-shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Email Address</span>
                  <a href="mailto:jagadeeshveeranki30@gmail.com" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:text-primary-505 transition-colors mt-0.5">
                    jagadeeshveeranki30@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                whileHover={{ scale: 1.015, x: 4, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
                className="glass-card p-4 flex items-center gap-4 hover:border-primary-505/30 transition-all duration-300 cursor-pointer select-none"
              >
                <div className="w-9 h-9 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center text-primary-505 dark:text-primary-300 flex-shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Contact Number</span>
                  <a href="tel:+916302471838" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:text-primary-505 transition-colors mt-0.5">
                    +91 6302471838
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                whileHover={{ scale: 1.015, x: 4, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
                className="glass-card p-4 flex items-center gap-4 hover:border-primary-505/30 transition-all duration-300 cursor-pointer select-none"
              >
                <div className="w-9 h-9 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center text-primary-505 dark:text-primary-300 flex-shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Office Locality</span>
                  <span className="block text-sm font-semibold text-zinc-850 dark:text-zinc-200 mt-0.5">
                    Eluru, Andhra Pradesh, India
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Quick Profiles links */}
            <div className="flex gap-4">
              <LiquidButton
                href="https://github.com/jagadeeshveeranki36"
                className="flex-1 btn-secondary py-2.5 text-xs font-bold"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </LiquidButton>
              <LiquidButton
                href="https://www.linkedin.com/in/jagadeesh-veeranki-94a5b2300/"
                className="flex-1 btn-secondary py-2.5 text-xs font-bold"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </LiquidButton>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 h-full flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <motion.div
                  animate={invalidFields.includes('name') ? 'shake' : ''}
                  variants={shakeVariants}
                >
                  <label htmlFor="name" className="block text-[8.5px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-lg border bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-505/10 focus:border-primary-505 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-450 dark:placeholder-zinc-650 transition-all duration-350 text-sm ${
                      invalidFields.includes('name') ? 'border-red-500/60 ring-2 ring-red-500/10' : 'border-zinc-250 dark:border-zinc-800'
                    }`}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  animate={invalidFields.includes('email') ? 'shake' : ''}
                  variants={shakeVariants}
                >
                  <label htmlFor="email" className="block text-[8.5px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-lg border bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-505/10 focus:border-primary-505 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-450 dark:placeholder-zinc-655 transition-all duration-350 text-sm ${
                      invalidFields.includes('email') ? 'border-red-500/60 ring-2 ring-red-500/10' : 'border-zinc-250 dark:border-zinc-800'
                    }`}
                  />
                </motion.div>

                {/* Subject / Title */}
                <motion.div
                  animate={invalidFields.includes('title') ? 'shake' : ''}
                  variants={shakeVariants}
                >
                  <label htmlFor="title" className="block text-[8.5px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Subject of message"
                    className={`w-full px-4 py-3 rounded-lg border bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-505/10 focus:border-primary-505 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-450 dark:placeholder-zinc-655 transition-all duration-350 text-sm ${
                      invalidFields.includes('title') ? 'border-red-500/60 ring-2 ring-red-500/10' : 'border-zinc-250 dark:border-zinc-800'
                    }`}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={invalidFields.includes('message') ? 'shake' : ''}
                  variants={shakeVariants}
                >
                  <label htmlFor="message" className="block text-[8.5px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className={`w-full px-4 py-3 rounded-lg border bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-505/10 focus:border-primary-505 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-450 dark:placeholder-zinc-655 transition-all duration-350 text-sm resize-none ${
                      invalidFields.includes('message') ? 'border-red-500/60 ring-2 ring-red-500/10' : 'border-zinc-250 dark:border-zinc-800'
                    }`}
                  />
                </motion.div>

                {/* Toast alerts using spring motion curves */}
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-3.5 bg-red-500/10 dark:bg-red-500/5 border border-red-500/20 text-red-500 rounded-lg text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-3.5 bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Success! Your email was sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action */}
                <LiquidButton
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary font-bold text-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </LiquidButton>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
