"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Twitter, Instagram, Facebook, Dribbble } from "lucide-react";

export default function SidebarDrawer({ isOpen, onClose }) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 hidden lg:block"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.33, 1, 0.68, 1], duration: 0.6 }}
            className="fixed top-0 right-0 h-full w-[420px] bg-[#111111] z-101 shadow-2xl flex-col hidden lg:flex"
          >
            {/* Top Section with Close Button */}
            <div className="flex justify-end p-8 pb-4">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
              
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="/logo-white.png"
                  alt="Perceptcraft Logo"
                  width={200}
                  height={50}
                  className="w-auto h-10 object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-[#a3a3a3] text-[15px] leading-relaxed font-medium tracking-wide mb-12">
                Percept Craft is a creative team focused on bringing your vision to life through impactful design. We create memorable designs that leave a lasting impression. Explore our portfolio and dive into the world of creative possibilities!
              </p>

              {/* Get In Touch */}
              <div className="mb-12">
                <h3 className="text-white text-[20px] font-bold mb-8">Get In Touch</h3>
                
                <ul className="flex flex-col gap-6">
                  {/* Email */}
                  <li className="flex gap-4">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-[15px] mb-1">Email</p>
                      <a href="mailto:info.perceptcraft@gmail.com" className="text-[#6658EA] font-medium text-[15px] hover:text-white transition-colors">
                        info.perceptcraft@gmail.com
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-4">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-[15px] mb-1">Phone</p>
                      <a href="tel:+917285865665" className="text-gray-300 font-medium text-[15px] hover:text-[#6658EA] transition-colors">
                        (+91) 728 586 5665
                      </a>
                    </div>
                  </li>

                  {/* Location */}
                  <li className="flex gap-4">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#6658EA] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-[15px] mb-1">Location</p>
                      <p className="text-gray-300 font-medium text-[15px] leading-relaxed">
                        B-803, Infinity Tower, Corporate road,<br />beside Ramada
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <Link href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300">
                  <Twitter className="w-[18px] h-[18px] text-[#6658EA] group-hover:text-white transition-colors" fill="currentColor" strokeWidth={0} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300">
                  <Instagram className="w-[18px] h-[18px] text-[#6658EA] group-hover:text-white transition-colors" strokeWidth={2} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300">
                  <Facebook className="w-[18px] h-[18px] text-[#6658EA] group-hover:text-white transition-colors" fill="currentColor" strokeWidth={0} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-[#6658EA] group transition-all duration-300">
                  {/* Using Dribbble or a globe/basketball if dribbble is missing, but Dribbble exists in recent lucide */}
                  <Dribbble className="w-[18px] h-[18px] text-[#6658EA] group-hover:text-white transition-colors" />
                </Link>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
