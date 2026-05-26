import Link from "next/link";
import { Civilization } from "@/types/civilization";

type CivilizationCardProps = {
  civilization: Civilization;
};

export function CivilizationCard({ civilization }: CivilizationCardProps) {
  return (
    <Link
      href={`/civilizations/${civilization.slug}`}
      className="group rounded-3xl border border-[#2d2d2d] bg-[#181818] p-6 transition hover:-translate-y-1 hover:border-[#c6a972]"
    >
      <p className="text-sm text-[#c6a972]">{civilization.period}</p>

      <h3 className="mt-3 text-2xl font-bold">{civilization.name}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
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
  );
}
