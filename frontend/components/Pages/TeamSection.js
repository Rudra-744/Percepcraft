import Image from "next/image";
import { Facebook, Twitter, Youtube } from "lucide-react";

// ─── Team Data ────────────────────────────────────────────────────────────────
const TEAM_MEMBERS = [
  {
    name: "Alextina Ditarson",
    role: "UX Designer",
    image: "/ab-inner-1.jpg",
  },
  {
    name: "Ken F. Berry",
    role: "Product Manager",
    image: "/ab-inner-2.jpg",
  },
  {
    name: "Jonathan Mercado",
    role: "UI Designer",
    image: "/ab-inner-3.jpg",
  },
  {
    name: "David D. Rethman",
    role: "Web Developer",
    image: "/ab-inner-1.jpg",
  },
];

// ─── Pinterest SVG Icon (lucide doesn't have it) ─────────────────────────────
function PinterestIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.995-.282 1.193.599 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.893 2.743a.36.36 0 01.085.345c-.091.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

// ─── Single Team Card ─────────────────────────────────────────────────────────
function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Outer dashed border ring */}
      <div className="w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-dashed border-gray-300 group-hover:border-emerald-400 flex items-center justify-center mb-6 transition-colors duration-500 p-3.5">
        {/* Inner circular avatar */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          {/* Green overlay on hover */}
          <div className="absolute inset-0 bg-emerald-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-full" />
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 230px"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 mb-1 tracking-tight">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-[13px] sm:text-[14px] text-gray-400 font-medium mb-5">
        {member.role}
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-5">
        <a href="#" aria-label={`${member.name} Facebook`} className="text-gray-400 hover:text-gray-800 transition-colors duration-200">
          <Facebook className="w-4 h-4" strokeWidth={0} fill="currentColor" />
        </a>
        <a href="#" aria-label={`${member.name} Twitter`} className="text-gray-400 hover:text-gray-800 transition-colors duration-200">
          <Twitter className="w-4 h-4" strokeWidth={0} fill="currentColor" />
        </a>
        <a href="#" aria-label={`${member.name} YouTube`} className="text-gray-400 hover:text-gray-800 transition-colors duration-200">
          <Youtube className="w-4 h-4" strokeWidth={0} fill="currentColor" />
        </a>
        <a href="#" aria-label={`${member.name} Pinterest`} className="text-gray-400 hover:text-gray-800 transition-colors duration-200">
          <PinterestIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-gray-100" aria-labelledby="team-heading">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading — Centered */}
        <h2
          id="team-heading"
          className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#1a1a1a] leading-[1.15] tracking-tight text-center mb-14 lg:mb-20"
        >
          Meet with our team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 sm:gap-x-10">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
