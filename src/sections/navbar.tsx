// components/Navbar.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        backgroundColor: 'rgba(255, 255, 255, .5)',
        backdropFilter: 'blur(10px)',
        marginTop:'0px', // Indigo-600
      });
    } else {
      controls.start({
        marginTop: '-100px',
        boxShadow: 'none',
      });
    }
  }, [isScrolled, controls]);

  const menuItems = [
    { name: 'Home', url: '/' },
    {name: 'About me', url: '/about'},
    { name: 'Projects', url: '#projects' },
    { name: 'Testimonials', url: '#testimonials' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Contact', url: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="fixed w-full z-50 transition-colors duration-300"
      animate={controls}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-black font-bold text-xl">
            A.N
          </Link>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.url} className="text-black hover:text-gray-700/90 transition-colors">
               {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-2 bg-white/50">
          {menuItems.map((item) => (
            <Link key={item.name} onClick={toggleMenu} href={item.url} className="block py-2 text-black hover:text-gray-700 transition-colors">
            
                {item.name}
              
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;