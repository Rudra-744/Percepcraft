import AnimatedCounter from "@/components/Pages/AnimatedCounter";

export default function StatsCounterSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-14 place-items-center">
          <AnimatedCounter end={850} label="PROJECTS DELIVERD" />
          <AnimatedCounter end={24} label="YEARS OF OPERATION" />
          <AnimatedCounter end={84} label="SPECIALIST MEMBER" />
          <AnimatedCounter end={280} label="PROJECTS DELIVERD" />
        </div>
      </div>
    </section>
  );
}
