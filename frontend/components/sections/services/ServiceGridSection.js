import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "User Experience Design",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-1.png",
  },
  {
    id: 2,
    title: "User Interface Design",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-2.png",
  },
  {
    id: 3,
    title: "Ui Kit and 3d Desgin",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-3.png",
  },
  {
    id: 4,
    title: "Web Development",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-4.png",
  },
  {
    id: 5,
    title: "Mobile Development",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-5.png",
  },
  {
    id: 6,
    title: "Web Custom Solution",
    desc: "Perceptcraft have got quite a few already made templates for better project management that you can use now.",
    image: "/sv-6.png",
  },
];

export default function ServiceGridSection() {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <Link
            href="/services/details"
            key={service.id}
            className="group bg-white rounded-[40px] p-10 lg:p-12 flex flex-col items-center text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] transition-all duration-500 border border-gray-100 hover:-translate-y-1"
          >
            <div className="mb-10 transition-transform duration-500 group-hover:-translate-y-2 flex justify-center items-center">
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={160}
                quality={100}
                className="object-contain "
              />
            </div>

            <h3 className="text-[24px] lg:text-[26px] font-bold text-[#1a1a1a] mb-5 group-hover:text-[#F3C04F] transition-colors duration-300 leading-[1.3] max-w-[200px]">
              {service.title.split(" ").map((word, i) => (
                <span key={i}>{word} </span>
              ))}
            </h3>

            <p className="text-[15px] text-gray-500 leading-[1.8] mb-10 font-light px-2">
              {service.desc}
            </p>

            <div className="inline-flex items-center gap-3 mt-auto font-bold text-[14px] tracking-wider text-[#1a1a1a] group-hover:text-[#ECA521] transition-colors uppercase group/link">
              <span className="w-7 h-7 rounded-full bg-[#ECA521] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1 shadow-md">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              READ MORE
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
