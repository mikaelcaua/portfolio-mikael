"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export interface HeaderSectionProps {
  menuItems: Array<{ href: string; label: string }>;
}

const menuLinkClass = "text-gray-600 hover:text-teal-500 transition-colors duration-200";
const mobileMenuLinkClass = "block py-2 text-gray-600 hover:text-teal-500 transition-colors duration-200";

export function HeaderSection({ menuItems }: HeaderSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-gray-900">Mikael Cauã</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={menuLinkClass}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileMenuLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
} 