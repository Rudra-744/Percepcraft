"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "Work", href: "/projects" },
  {
    name: "SERVICES",
    href: "/services",
    subLinks: [
      { name: "SERVICE", href: "/services" },
      { name: "SERVICE DETAILS", href: "/services/details" },
    ],
  },
  {
    name: "PAGES",
    href: "/pages",
    subLinks: [
      { name: "PLAN", href: "/plan" },
      { name: "CONTACT US", href: "/contact" },
    ],
  },
];

export default function MobileSidebarDrawer({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Close any open dropdowns when closing sidebar
      setTimeout(() => setOpenDropdown(null), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleDropdown = (name, e) => {
    e.preventDefault(); // Prevent navigating if clicking the expander
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 lg:hidden block"
          />

          {/* Mobile Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.33, 1, 0.68, 1],
              duration: 0.5,
            }}
            className="fixed top-0 right-0 h-full w-[300px] sm:w-[360px] bg-[#111111] z-101 shadow-2xl flex flex-col lg:hidden"
          >
            {/* Top Section */}
            <div className="flex items-center justify-between p-6 sm:p-8 pb-4 border-b border-white/5">
              <Image
                src="/logo-white.png"
                alt="Perceptcraft Logo"
                width={160}
                height={40}
                className="w-auto h-8 object-contain"
              />
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 pt-6 pb-10 custom-scrollbar">
              {/* Navigation Links */}
              <nav className="flex flex-col mb-10">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5">
                    <div className="flex items-center justify-between py-4">
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (!link.subLinks) onClose();
                          else toggleDropdown(link.name, e);
                        }}
                        className="text-white text-[15px] font-bold tracking-wider hover:text-[#6658EA] transition-colors flex-1"
                      >
                        {link.name}
                      </Link>

                      {link.subLinks && (
                        <button
                          onClick={(e) => toggleDropdown(link.name, e)}
                          className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                        >
                          {openDropdown === link.name ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Sublinks Dropdown */}
                    <AnimatePresence>
                      {link.subLinks && openDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pb-4 pl-4 border-l border-white/10 ml-2 mt-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={onClose}
                                className="text-gray-400 text-[14px] font-semibold hover:text-[#6658EA] transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Get In Touch */}
              <div className="mb-10">
                <h3 className="text-white text-[18px] font-bold mb-6">
                  Get In Touch
                </h3>

                <ul className="flex flex-col gap-5">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <Mail className="w-[18px] h-[18px] text-white" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-white font-medium text-[14px] mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info.perceptcraft@gmail.com"
                        className="text-gray-300 font-medium text-[13px] hover:text-[#6658EA] transition-colors break-all"
                      >
                        info.perceptcraft@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <Phone className="w-[18px] h-[18px] text-white" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-white font-medium text-[14px] mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+917285865665"
                        className="text-gray-300 font-medium text-[13px] hover:text-[#6658EA] transition-colors"
                      >
                        (+91) 728 586 5665
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <MapPin className="w-[18px] h-[18px] text-white" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-white font-medium text-[14px] mb-1">
                        Location
                      </p>
                      <p className="text-gray-300 font-medium text-[13px] leading-relaxed pr-2">
                        B-803, Infinity Tower, Corporate road, beside Ramada
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 border-t border-white/5 pt-8">
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300"
                >
                  <Twitter
                    className="w-4 h-4 text-[#6658EA] group-hover:text-white transition-colors"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300"
                >
                  <Instagram
                    className="w-4 h-4 text-[#6658EA] group-hover:text-white transition-colors"
                    strokeWidth={2}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300"
                >
                  <Facebook
                    className="w-4 h-4 text-[#6658EA] group-hover:text-white transition-colors"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300"
                >
                  <Globe className="w-4 h-4 text-[#6658EA] group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
