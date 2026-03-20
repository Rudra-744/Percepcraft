import Image from "next/image";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[350px] flex items-center bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/breadcurmb.jpg"
          alt="About Perceptcraft Breadcrumb"
          fill
          className="object-cover object-bottom-right md:object-right"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-[-0.02em] drop-shadow-sm">
          About Perceptcraft
        </h1>
        <nav className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-gray-900 uppercase">
          <Link href="/" className="hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded">Home</Link>
          <span className="font-light text-gray-500">&gt;</span>
          <span className="text-gray-600 bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded">About Us</span>
        </nav>
      </div>
    </section>
  );
}
