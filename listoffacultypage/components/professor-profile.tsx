"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Faculty } from "@/lib/faculty-data";
import { Mail, Phone, ArrowLeft, ExternalLink } from "lucide-react";

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-5");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-5 transition-all duration-600 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export function ProfessorProfile({ faculty }: { faculty: Faculty }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[var(--muted)]">
      <main className="w-full max-w-[1152px] bg-[var(--card)] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-[var(--border)]">
        {/* Top accent bar */}
        <div className="h-2 bg-[var(--primary-maroon)]" />

        <div className="p-12 max-[768px]:p-6">
          {/* Back button */}
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--primary-maroon)] font-semibold text-sm mb-8 no-underline hover:underline transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Faculty Directory
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeIn className="flex justify-center mb-8">
                <img
                  src={faculty.imageUrl}
                  alt={`Portrait of ${faculty.name}`}
                  className="w-44 h-44 rounded-full border-4 border-[var(--primary-maroon)] object-cover shadow-lg"
                />
              </FadeIn>

              <FadeIn className="bg-[var(--soft-rose)] p-6 rounded-2xl border border-[var(--border-rose)]">
                <h3 className="text-[var(--primary-maroon)] text-lg uppercase tracking-wider mb-4 font-bold">
                  Contact Details
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-[var(--card)] p-2 rounded-lg text-[var(--primary-maroon)] flex">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a
                      href={`mailto:${faculty.contact.email}`}
                      className="text-[var(--foreground)] no-underline hover:text-[var(--primary-maroon)] transition-colors text-sm break-all"
                    >
                      {faculty.contact.email}
                    </a>
                  </li>
                  {faculty.contact.phone && (
                    <li className="flex items-center gap-3">
                      <div className="bg-[var(--card)] p-2 rounded-lg text-[var(--primary-maroon)] flex">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-[var(--foreground)] text-sm">
                        +91 {faculty.contact.phone}
                      </span>
                    </li>
                  )}
                  <li>
                    <a
                      href={faculty.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--primary-maroon)] font-bold text-sm no-underline hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Scholar Profile
                    </a>
                  </li>
                </ul>
              </FadeIn>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <FadeIn>
                <header>
                  <h1 className="text-[3rem] max-[768px]:text-[2rem] font-extrabold text-[var(--deep-maroon)] m-0 leading-tight text-balance">
                    {faculty.name}
                  </h1>
                  <p className="text-[var(--primary-maroon)] uppercase tracking-[0.1em] font-semibold mt-3 text-sm">
                    {faculty.designation}
                  </p>
                </header>
              </FadeIn>

              <div className="mt-10 flex flex-col gap-6">
                {/* Qualification */}
                <FadeIn>
                  <div className="bg-[var(--soft-rose)] p-6 rounded-xl border-l-4 border-[var(--primary-maroon)]">
                    <h2 className="text-xl font-bold text-[var(--deep-maroon)] mb-2">
                      Qualification
                    </h2>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {faculty.qualification}
                    </p>
                  </div>
                </FadeIn>

                {/* Areas of Interest */}
                <FadeIn>
                  <div className="bg-[var(--soft-rose)] p-6 rounded-xl border-l-4 border-[var(--primary-maroon)]">
                    <h2 className="text-xl font-bold text-[var(--deep-maroon)] mb-3">
                      Areas of Interest
                    </h2>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                      {faculty.expertise.map((ex) => (
                        <li
                          key={ex}
                          className="text-[var(--muted-foreground)] relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-maroon)]"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Department Info */}
                <FadeIn>
                  <div className="p-6 border border-[#f3f4f6] rounded-xl">
                    <h2 className="text-xl font-bold text-[var(--deep-maroon)] mb-2">
                      Department
                    </h2>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      Department of Chemical Engineering, Indian Institute of
                      Technology Tirupati
                    </p>
                    <a
                      href="https://chemical.iittp.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--primary-maroon)] font-semibold text-sm mt-3 no-underline hover:underline"
                    >
                      Visit Department Website <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
