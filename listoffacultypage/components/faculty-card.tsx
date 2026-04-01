"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Faculty } from "@/lib/faculty-data";
import { Mail, GraduationCap, UserRound } from "lucide-react";

export function FacultyCard({ faculty }: { faculty: Faculty }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/professor/${faculty.id}`}
      id={`faculty-${faculty.id}`}
      className={`flex items-center rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-[30px] no-underline transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-x-3 hover:border-[var(--primary-maroon)] hover:shadow-[0_12px_30px_rgba(126,1,1,0.1)] max-[850px]:flex-col max-[850px]:text-center ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionProperty: "opacity, transform, border-color, box-shadow" }}
    >
      <div className="shrink-0 w-[180px] h-[180px] mr-10 max-[850px]:mr-0 max-[850px]:mb-6">
        <img
          src={faculty.imageUrl}
          alt={`Portrait of ${faculty.name}`}
          className="w-full h-full object-cover rounded-full border-4 border-[var(--primary-maroon)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <h2 className="m-0 mb-2 text-[1.6rem] font-bold text-[var(--primary-maroon)]">
          {faculty.name}
        </h2>

        <p className="m-0 mb-4 text-[0.9rem] text-[#666] font-semibold uppercase tracking-wider flex items-center gap-2 max-[850px]:justify-center">
          <UserRound className="w-4 h-4" />
          {faculty.designation}
        </p>

        <div className="mb-4">
          <strong className="block mb-1 text-[var(--deep-maroon)] text-[0.95rem]">
            Research Expertise:
          </strong>
          <ul className="list-none p-0">
            {faculty.expertise.map((ex) => (
              <li
                key={ex}
                className="text-[0.9rem] text-[var(--muted-foreground)] relative pl-5 mb-1 before:content-[''] before:absolute before:left-0 before:top-[0.45em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--primary-maroon)] max-[850px]:pl-0 max-[850px]:before:hidden"
              >
                {ex}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6 mt-5 max-[850px]:justify-center">
          <span className="text-[var(--primary-maroon)] text-[0.9rem] font-bold flex items-center gap-2">
            <Mail className="w-4 h-4" /> Email
          </span>
          <span className="text-[var(--primary-maroon)] text-[0.9rem] font-bold flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Google Scholar
          </span>
        </div>
      </div>
    </Link>
  );
}
