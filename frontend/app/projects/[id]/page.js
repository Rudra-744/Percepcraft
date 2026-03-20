import { PROJECTS } from "../../../data/projects";
import ProjectDetail from "../../../components/Pages/ProjectDetail";
import { notFound } from "next/navigation";

// Generate static params for optimal production build speed
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

// Generate dynamic semantic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id.toString() === resolvedParams.id);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.client} | Perceptcraft Portfolio`,
    description: project.description.slice(0, 160) + "...",
  };
}

export default async function ProjectDynamicPage({ params }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id.toString() === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
