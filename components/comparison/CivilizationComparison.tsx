import { civilizations } from "@/data/civilizations";

function getStrongestFactor(slug: string) {
  const civilization = civilizations.find((item) => item.slug === slug);

  if (!civilization) {
    return null;
  }

  return civilization.factors.reduce((highest, current) =>
    current.severity > highest.severity ? current : highest,
  );
}

export function CivilizationComparison() {
  return (
    <section className="rounded-4xl border border-[#2d2d2d] bg-[#181818] p-6 md:p-10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#2d2d2d] text-sm text-[#c6a972]">
              <th className="pb-4">Civilization</th>
              <th className="pb-4">Period</th>
              <th className="pb-4">Region</th>
              <th className="pb-4">Collapse Type</th>
              <th className="pb-4">Strongest Factor</th>
            </tr>
          </thead>

          <tbody>
            {civilizations.map((civilization) => {
              const strongestFactor = getStrongestFactor(civilization.slug);

              return (
                <tr
                  key={civilization.slug}
                  className="border-b border-[#2d2d2d] text-sm text-gray-300"
                >
                  <td className="py-5 font-semibold text-white">
                    {civilization.name}
                  </td>
                  <td className="py-5">{civilization.period}</td>
                  <td className="py-5">{civilization.region}</td>
                  <td className="py-5">{civilization.collapseType}</td>
                  <td className="py-5">
                    {strongestFactor?.name} ({strongestFactor?.severity}%)
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
