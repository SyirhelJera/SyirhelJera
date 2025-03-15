"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl font-bold tracking-wide cursor-pointer"
          >
            SV. JERA
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black bg-opacity-95"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
