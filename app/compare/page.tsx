import Link from "next/link";
import { CivilizationComparison } from "@/components/comparison/CivilizationComparison";

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-16 text-white">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/civilizations"
          className="text-sm text-[#c6a972] hover:underline"
        >
          Back To Archive
        </Link>

        <div className="mb-10 mt-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
            Comparative Analysis
          </p>

          <h1 className="text-5xl font-bold">Compare Collapse Patterns</h1>

          <p className="mt-5 text-gray-400">
            Compare civilizations by period, region, collapse type, and the
            strongest pressure factor in their decline.
          </p>
        </div>

        <CivilizationComparison />
      </section>
    </main>
  );
}
