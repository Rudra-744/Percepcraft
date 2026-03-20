"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import SidebarDrawer from "./SidebarDrawer";
import MobileSidebarDrawer from "./MobileSidebarDrawer";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full py-5 px-6 md:px-10 lg:px-10 flex items-center justify-between absolute top-0 z-50 transition-all bg-transparent">
      
      <div className="flex items-center gap-8 lg:gap-8 w-full lg:w-auto justify-between lg:justify-start">
        <Link href="/" aria-label="Home" className="flex flex-col">
          <Image src="/logo.png" alt="Perceptcraft Logo" width={220} height={60} className="h-12 w-auto object-contain" priority />
        </Link>

        {/* Vertical divider visible on lg */}
        <div className="hidden lg:block h-12 w-[1px] bg-black/[0.08] mx-2"></div>
      </div>

      <nav className="hidden lg:flex items-center gap-10 text-[17px] text-gray-500 font-semibold tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="hover:text-black transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-black transition-colors">ABOUT</Link>
        <Link href="/projects" className="hover:text-black transition-colors">PROJECTS</Link>

        {/* SERVICES with hover dropdown */}
        <div className="relative group">
          <Link href="/services" className="hover:text-black transition-colors flex items-center gap-1">
            SERVICES
         
          </Link>

          {/* Invisible bridge to prevent gap */}
          <div className="absolute top-full left-0 w-full h-3" />

          {/* Dropdown */}
          <div className="
            absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
            w-[220px] bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)]
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200 ease-out
            overflow-hidden z-50
          ">
            {/* Purple top border */}
            <div className="h-[3px] w-full bg-[#6658EA]" aria-hidden="true" />

            <div className="py-2">
              <Link
                href="/services"
                className="block px-5 py-3 text-[14px] font-bold text-gray-700 tracking-wider hover:bg-gray-50 hover:text-[#6658EA] transition-colors"
              >
                SERVICE
              </Link>
              <Link
                href="/services/details"
                className="block px-5 py-3 text-[14px] font-bold text-gray-700 tracking-wider hover:bg-gray-50 hover:text-[#6658EA] transition-colors"
              >
                SERVICE DETAILS
              </Link>
            </div>
          </div>
        </div>

        {/* PAGES with hover dropdown */}
        <div className="relative group">
          <Link href="/pages" className="hover:text-black transition-colors flex items-center gap-1">
            PAGES
          </Link>

          {/* Invisible bridge to prevent gap */}
          <div className="absolute top-full left-0 w-full h-3" />

          {/* Dropdown */}
          <div className="
            absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
            w-[220px] bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)]
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200 ease-out
            overflow-hidden z-50
          ">
            {/* Purple top border */}
            <div className="h-[3px] w-full bg-[#6658EA]" aria-hidden="true" />

            <div className="py-2">
              <Link
                href="/plan"
                className="block px-5 py-3 text-[14px] font-bold text-gray-700 tracking-wider hover:bg-gray-50 hover:text-[#6658EA] transition-colors"
              >
                PLAN
              </Link>
              <Link
                href="/contact"
                className="block px-5 py-3 text-[14px] font-bold text-gray-700 tracking-wider hover:bg-gray-50 hover:text-[#6658EA] transition-colors uppercase"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="hidden lg:flex items-center gap-5 md:gap-6">

        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-3.5 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-700" strokeWidth={2} />
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex lg:hidden items-center gap-3">
        <button 
          className="flex bg-white shadow-sm p-3 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <MobileSidebarDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Desktop Sidebar Drawer */}
      <SidebarDrawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
