import Link from "next/link";
import { civilizations } from "@/data/civilizations";

export function CivilizationPreview() {
  return (
    <section id="civilizations" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
            Collapse Archive
          </p>

          <h2 className="text-4xl font-bold">
            Choose A Civilization To Explore
          </h2>

          <p className="mt-4 text-gray-400">
            Start with a historical profile and uncover the pressure points that
            shaped its decline.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {civilizations.map((civilization) => (
            <Link
              key={civilization.slug}
              href={`/civilizations/${civilization.slug}`}
              className="group rounded-3xl border border-[#2d2d2d] bg-[#181818] p-6 transition hover:-translate-y-1 hover:border-[#c6a972]"
            >
              <p className="text-sm text-[#c6a972]">{civilization.period}</p>

              <h3 className="mt-3 text-2xl font-bold">{civilization.name}</h3>

              <p className="mt-3 text-sm text-gray-400">
                {civilization.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2d2d2d] px-3 py-1 text-xs text-gray-300">
                  {civilization.region}
                </span>

                <span className="rounded-full border border-[#2d2d2d] px-3 py-1 text-xs text-gray-300">
                  {civilization.collapseType}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
