import { CollapseFactor } from "@/types/civilization";

type CollapseFactorsProps = {
  factors: CollapseFactor[];
};

export function CollapseFactors({ factors }: CollapseFactorsProps) {
  return (
    <section className="mt-10 rounded-4xl border border-[#2d2d2d] bg-[#181818] p-8 md:p-12">
      <p className="text-sm uppercase tracking-[0.25em] text-[#c6a972]">
        Collapse Factors
      </p>

      <h2 className="mt-4 text-4xl font-bold">Pressure Breakdown</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {factors.map((factor) => (
          <article
            key={factor.name}
            className="rounded-3xl border border-[#2d2d2d] bg-[#0f0f0f] p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold">{factor.name}</h3>

              <p className="text-sm text-[#c6a972]">{factor.severity}%</p>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#2d2d2d]">
              <div
                className="h-full rounded-full bg-[#c6a972]"
                style={{ width: `${factor.severity}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
