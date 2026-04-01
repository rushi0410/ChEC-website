import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--muted)] p-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[var(--deep-maroon)] mb-4">
          Professor Not Found
        </h1>
        <p className="text-[var(--muted-foreground)] mb-8 text-lg">
          The faculty member you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block py-3 px-8 bg-[var(--primary-maroon)] text-[var(--primary-foreground)] rounded-full font-bold no-underline hover:opacity-90 transition-opacity shadow-[0_4px_10px_rgba(126,1,1,0.2)]"
        >
          Back to Faculty Directory
        </Link>
      </div>
    </div>
  );
}
