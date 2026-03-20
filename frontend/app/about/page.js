import AboutUs from "../../components/Pages/AboutUs";

export const metadata = {
  title: "About Us - Perceptcraft",
  description: "Percept Craft We are a creative team that believes in making your perceptions come true. We let our designs speak for themselves.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex min-h-screen flex-col pt-20">
      <AboutUs />
    </main>
  );
}
