import Link from "next/link";
import { notFound } from "next/navigation";
import { civilizations } from "@/data/civilizations";
import { CollapseTimeline } from "@/components/timeline/CollapseTimeline";
import { CollapseFactors } from "@/components/dashboard/CollapseFactors";

export default async function CivilizationPage(
  props: PageProps<"/civilizations/[slug]">,
) {
  const { slug } = await props.params;
  const civilization = civilizations.find((item) => item.slug === slug);

  if (!civilization) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/civilizations"
          className="text-sm text-[#c6a972] hover:underline"
        >
          Back To Archive
        </Link>

        <div className="mt-10 rounded-4xl border border-[#2d2d2d] bg-[#181818] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-[#c6a972]">
            Collapse Profile
          </p>

          <h1 className="mt-4 text-5xl font-bold">{civilization.name}</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {civilization.summary}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2d2d2d] p-5">
              <p className="text-sm text-gray-500">Period</p>
              <p className="mt-2 text-lg text-white">{civilization.period}</p>
            </div>

            <div className="rounded-2xl border border-[#2d2d2d] p-5">
              <p className="text-sm text-gray-500">Region</p>
              <p className="mt-2 text-lg text-white">{civilization.region}</p>
            </div>

            <div className="rounded-2xl border border-[#2d2d2d] p-5">
              <p className="text-sm text-gray-500">Collapse Type</p>
              <p className="mt-2 text-lg text-white">
                {civilization.collapseType}
              </p>
            </div>
          </div>
        </div>

        <CollapseFactors factors={civilization.factors} />
        <CollapseTimeline events={civilization.timeline} />
      </section>
    </main>
  );
}
