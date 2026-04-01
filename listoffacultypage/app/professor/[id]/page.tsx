import { notFound } from "next/navigation";
import { faculties, getFacultyById } from "@/lib/faculty-data";
import { ProfessorProfile } from "@/components/professor-profile";
import type { Metadata } from "next";

export function generateStaticParams() {
  return faculties.map((f) => ({ id: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const faculty = getFacultyById(id);
  if (!faculty) {
    return { title: "Professor Not Found" };
  }
  return {
    title: `${faculty.name} | ChEC IIT Tirupati`,
    description: `${faculty.name} - ${faculty.designation}. Research: ${faculty.expertise.join(", ")}`,
  };
}

export default async function ProfessorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const faculty = getFacultyById(id);

  if (!faculty) {
    notFound();
  }

  return <ProfessorProfile faculty={faculty} />;
}
