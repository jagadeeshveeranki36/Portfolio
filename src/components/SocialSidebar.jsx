import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function SocialSidebar() {
  const socials = [
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com', label: 'GitHub Profile' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:jagadeeshveeranki30@gmail.com', label: 'Email Address' },
    { icon: <Phone className="h-4 w-4" />, href: 'tel:+916302471838', label: 'Phone Number' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-6 bottom-0 z-30 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-[1.5px] after:h-24 after:bg-slate-350 dark:after:bg-slate-700 after:mt-2"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          whileHover={{ y: -3 }}
          className="magnetic w-9 h-9 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm transition-all duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
