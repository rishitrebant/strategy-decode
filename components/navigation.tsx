'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { label: 'CEO Breakdowns', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Startup Stories', href: '#' },
    { label: 'Frameworks', href: '#' },
    { label: 'Resources', href: '#' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // TODO: Implement actual dark mode toggle
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 font-semibold text-lg tracking-tight transition-colors hover:text-primary">
          Strategy Decode
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground transition-colors duration-150 whitespace-nowrap hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="p-2 rounded-md transition-colors duration-150 hover:bg-input"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Newsletter Button */}
          <button className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md transition-colors duration-150 hover:bg-input">
            Newsletter
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md transition-colors duration-150 hover:bg-input"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
