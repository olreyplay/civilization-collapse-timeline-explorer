import { CivilizationCard } from "@/components/civilization/CivilizationCard";
import { civilizations } from "@/data/civilizations";

export default function CivilizationsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
          Civilization Archive
        </p>

        <h1 className="text-5xl font-bold">Explore Collapse Profiles</h1>

        <p className="mt-5 max-w-2xl text-gray-400">
          Browse historical civilizations and compare the political, military,
          economic, and environmental forces behind their decline.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {civilizations.map((civilization) => (
            <CivilizationCard
              key={civilization.slug}
              civilization={civilization}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
