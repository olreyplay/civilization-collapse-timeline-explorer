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
  const [searchQuery, setSearchQuery] = useState("");

  const collapseTypes = [
    "All",
    ...new Set(civilizations.map((item) => item.collapseType)),
  ];

  const filteredCivilizations = civilizations.filter((civilization) => {
    const matchesType =
      selectedType === "All" || civilization.collapseType === selectedType;

    const searchableText = `
      ${civilization.name}
      ${civilization.region}
      ${civilization.collapseType}
      ${civilization.summary}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchQuery.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="mt-12">
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search by civilization, region, or collapse type"
        className="w-full rounded-full border border-[#2d2d2d] bg-[#181818] px-6 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#c6a972]"
      />

      <div className="mt-6 flex flex-wrap gap-3">
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

      {filteredCivilizations.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredCivilizations.map((civilization) => (
            <CivilizationCard
              key={civilization.slug}
              civilization={civilization}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-[#2d2d2d] bg-[#181818] p-8 text-center">
          <h2 className="text-2xl font-bold">No Civilizations Found</h2>

          <p className="mt-3 text-gray-400">
            Try changing your search term or selecting another collapse type.
          </p>
        </div>
      )}
    </div>
  );
}
