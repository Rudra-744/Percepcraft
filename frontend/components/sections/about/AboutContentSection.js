import Image from "next/image";

export default function AboutContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10  py-14 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        
        {/* Left Text Content — ~45% width on desktop */}
        <div className="flex flex-col w-full lg:w-[45%] order-2 lg:order-1 pt-2">
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-gray-900 leading-[1.25] mb-5 tracking-tight">
            Perceptcraft do Design,<br className="hidden md:block" /> Develop and Branding
          </h2>
          
          <p className="text-gray-500 leading-[1.8] mb-7 text-[13px] md:text-[14px] font-normal">
            Percept Craft We are a creative team that believes in making your perceptions come true. We let our designs speak for themselves. 
            Some of our expert services include: Logo &amp; Corporate Identity Brand building Company Profile &amp; Brochure Website design Naming solution 
            Promotional campaign Print Advertisement Packaging Design Exhibition &amp; Event Design Web Casting. We believe in creating outstanding designs 
            that stays in the memories of our clients for a very long time. Our passion and creative endeavors make us different from other design companies. 
            As a testimony to this, you can view our portfolio and then decide to take a plunge into the world of designing!!
          </p>

          {/* Skills with green checkmarks */}
          <ul className="space-y-5 text-[13px] md:text-[16px]  text-gray-800">
            {[
              'FRONTEND 90%', 
              'Web Development 95%', 
              'UI/UX design 90%', 
              'Branding Design 80%'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Grid — ~55% width */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2">
          <div className="flex gap-4 lg:gap-5 h-[280px] sm:h-[360px] lg:h-[420px]">
            
            {/* Left Large Image */}
            <div className="relative w-[58%] h-full rounded-lg overflow-hidden group">
              <Image 
                src="/ab-inner-1.jpg" 
                alt="Brand Design Strategy"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 55vw, 30vw"
                priority
              />
            </div>

            {/* Right Side — 2 stacked images */}
            <div className="flex flex-col gap-4 lg:gap-5 w-[42%] h-full">
              <div className="relative w-full h-1/2 rounded-lg overflow-hidden group">
                <Image 
                  src="/ab-inner-2.jpg" 
                  alt="Web Development Process"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <div className="relative w-full h-1/2 rounded-lg overflow-hidden group">
                <Image 
                  src="/ab-inner-3.jpg" 
                  alt="UI/UX Design Concept"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
