'use client'
// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
  ];

  const footerLinks = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '#projects' },
    { name: 'Testimonials', url: '#testimonials' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright and social links */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Name
            </motion.h3>
            <motion.p 
              className="text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              &copy; {currentYear} All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-gray-300 transition-colors">
                   {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Newsletter signup */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Stay Updated
            </motion.h3>
            <motion.p 
              className="text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Subscribe to my newsletter for the latest updates.
            </motion.p>
            <motion.form 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;