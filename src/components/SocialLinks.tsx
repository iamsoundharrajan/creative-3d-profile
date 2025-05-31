
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700/80 transition-all duration-300 group"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-blue-400 to-transparent mx-auto"></div>
      </div>
    </motion.div>
  );
};
