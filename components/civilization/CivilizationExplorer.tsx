"use client";

import { useState } from "react";
import { CivilizationCard } from "@/components/civilization/CivilizationCard";
import { Civilization } from "@/types/civilization";

type CivilizationExplorerProps = {
  civilizations: Civilization[];
};

export function CivilizationExplorer({
  civilizations,
}: CivilizationExplorerProps) {
  const [selectedType, setSelectedType] = useState("All");

  const collapseTypes = [
    "All",
    ...new Set(civilizations.map((item) => item.collapseType)),
  ];

  const filteredCivilizations =
    selectedType === "All"
      ? civilizations
      : civilizations.filter((item) => item.collapseType === selectedType);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-3">
        {collapseTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              selectedType === type
                ? "border-[#c6a972] bg-[#c6a972] text-black"
                : "border-[#2d2d2d] text-gray-300 hover:border-[#c6a972]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredCivilizations.map((civilization) => (
          <CivilizationCard
            key={civilization.slug}
            civilization={civilization}
          />
        ))}
      </div>
    </div>
  );
}
