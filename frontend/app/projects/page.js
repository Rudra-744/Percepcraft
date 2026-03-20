import Project from "../../components/Pages/Project";

export const metadata = {
  title: "Our Projects - Perceptcraft | Portfolio & Case Studies",
  description:
    "Explore our portfolio of vibrant brands, e-commerce stores, UI designs, and custom development projects. See how Perceptcraft transforms ideas into unforgettable digital presence.",
  openGraph: {
    title: "Our Projects - Perceptcraft",
    description:
      "Browse our latest work in e-commerce, UI design, branding, 3D, and custom development.",
    url: "https://yourclientdomain.com/projects",
    siteName: "Perceptcraft",
  },
};

export default function ProjectsPage() {
  return (
    <main className="w-full flex min-h-screen flex-col pt-20">
      <Project />
    </main>
  );
}
