import { CivilizationCard } from "@/components/civilization/CivilizationCard";
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
            <CivilizationCard
              key={civilization.slug}
              civilization={civilization}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
