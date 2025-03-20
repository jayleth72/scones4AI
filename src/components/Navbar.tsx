'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Scones & IT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Blog
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
