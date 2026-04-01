"use client";

import { useState } from "react";
import { faculties } from "@/lib/faculty-data";
import { FacultyCard } from "@/components/faculty-card";
import { Search } from "lucide-react";

export function FacultyList() {
  const [searchTerm, setSearchTerm] = useState("");

  const departmentFaculty = faculties.filter((f) => f.category === "faculty");
  const visitingFaculty = faculties.filter((f) => f.category === "visiting");

  const filterFaculty = (list: typeof faculties) =>
    list.filter((fac) => {
      const term = searchTerm.toLowerCase();
      const text = `${fac.name} ${fac.designation} ${fac.expertise.join(" ")}`.toLowerCase();
      return text.includes(term);
    });

  const filteredDept = filterFaculty(departmentFaculty);
  const filteredVisiting = filterFaculty(visitingFaculty);

  return (
    <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
      <header>
        <div className="inline-block text-[1.4rem] font-bold py-3 px-9 bg-[var(--primary-maroon)] text-[var(--primary-foreground)] rounded-full mb-8 shadow-[0_4px_10px_rgba(126,1,1,0.2)]">
          Our Department Faculties
        </div>
      </header>

      <div className="mb-12 relative">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" />
        <input
          type="text"
          placeholder="Search by name or research expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-4 pl-14 pr-6 text-base border-2 border-[var(--border)] rounded-full outline-none transition-all duration-300 font-[var(--font-montserrat)] focus:border-[var(--primary-maroon)] focus:shadow-[0_0_10px_rgba(126,1,1,0.1)] bg-[var(--card)] text-[var(--foreground)]"
        />
      </div>

      {/* Department Faculty */}
      <div className="flex flex-col gap-[30px]">
        {filteredDept.map((fac) => (
          <FacultyCard key={fac.id} faculty={fac} />
        ))}
      </div>

      {/* Visiting Faculty */}
      {filteredVisiting.length > 0 && (
        <>
          <div className="inline-block text-[1.2rem] font-bold py-3 px-8 bg-[var(--primary-maroon)] text-[var(--primary-foreground)] rounded-full mt-16 mb-8 shadow-[0_4px_10px_rgba(126,1,1,0.2)]">
            Visiting Faculty
          </div>
          <div className="flex flex-col gap-[30px]">
            {filteredVisiting.map((fac) => (
              <FacultyCard key={fac.id} faculty={fac} />
            ))}
          </div>
        </>
      )}

      {filteredDept.length === 0 && filteredVisiting.length === 0 && (
        <p className="text-center text-[var(--muted-foreground)] py-12 text-lg">
          No faculty members found matching your search.
        </p>
      )}

      <footer className="text-center py-10 mt-[60px] border-t border-[var(--border)] text-[0.9rem] text-[#888]">
        <p>
          &copy; 2026 ChEC Club, IIT Tirupati | Empowering Future Engineers
        </p>
      </footer>
    </div>
  );
}
