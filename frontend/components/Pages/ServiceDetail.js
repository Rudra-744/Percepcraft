import Image from "next/image";
import Link from "next/link";
import ContactSection from "./ContactSection";
import AnimatedHoverText from "./AnimatedHoverText";

export default function ServiceDetail() {
  return (
    <div className="w-full font-sans bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[40vh] md:h-[60vh] min-h-[350px] flex items-center bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/breadcurmb.jpg"
            alt="Service Details Breadcrumb"
            fill
            className="object-cover object-bottom-right md:object-right"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-black text-gray-900 mb-4 tracking-[-0.02em] drop-shadow-sm">
            Service Details
          </h1>
          <nav className="flex items-center gap-2 text-xs md:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mt-2">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded"
            >
              HOME
            </Link>
            <span className="font-light text-gray-800">&gt;</span>
            <Link
              href="/services"
              className="hover:text-indigo-600 transition-colors"
            >
              SERVICE
            </Link>
            <span className="font-light text-gray-800">&gt;</span>

            <span className="text-gray-800 bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded">
              SERVICE DETAILS
            </span>
          </nav>
        </div>
      </section>

      {/* 2. BIG IMAGE & TEXT SECTION */}
      <section className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-5">
        {/* Big Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-[30px] overflow-hidden mb-16">
          <Image
            src="/sv-details-1.jpg"
            alt="Service Work Details"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Articles/Text Content */}
        <div className="w-full px-5">
          <h2 className="text-[28px] md:text-[40px] lg:text-[45px] font-bold text-[#111111] leading-[1.2] tracking-tight mb-8">
            How To Improve And Measure Your Progress Learning Web Design
          </h2>
          <p className="text-[20px] sm:text-[17px] text-gray-500 leading-[1.9] mb-10 font-normal">
            Must explain to you how all this mistaken idea of denouncing works
            pleasure and praising uts pain was born and I will gives you a
            itself completed account of the system, and sed expounds the ut
            actual teachings of that greater sed explores truth. Denouncing
            works pleasures and praising pains was us born and I will gives you
            a completed ur workers accounts of the system. sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h3 className="text-[22px] md:text-[28px] font-bold text-[#111111] mb-6">
            Personal Experience
          </h3>
          <p className="text-[20px] sm:text-[17px] text-gray-500 leading-[1.9] mb-8 font-normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet,
          </p>
          <p className="text-[20px] sm:text-[17px] text-gray-500 leading-[1.9] mb-8 font-normal">
            Must explain to you how all this mistaken idea of denouncing works
            pleasure and praising uts pain was born and I will gives you a
            itself completed account of the system, and sed expounds the ut
            actual teachings of that greater sed explores truth. Denouncing
            works pleasures and praising pains was us born and I will gives you
            a completed ur workers accounts of the system. sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
      </section>

      {/* 3. CENTERED STROKE TEXT COMPONENT (Animated) */}
      <AnimatedHoverText />

      {/* 4. CONTACT FORM (Glassmorphism clone) */}
      <div className="border-t border-gray-100">
        <ContactSection />
      </div>
    </div>
  );
}
