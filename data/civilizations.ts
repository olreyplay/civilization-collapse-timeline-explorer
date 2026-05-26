import { Civilization } from "@/types/civilization";

export const civilizations: Civilization[] = [
  {
    slug: "roman-empire",
    name: "Roman Empire",
    period: "27 BC - 476 AD",
    region: "Europe, North Africa, Western Asia",
    collapseType: "Political fragmentation",
    summary:
      "The Western Roman Empire weakened through internal instability, economic pressure, military threats, and administrative division.",
    factors: [
      { name: "Political instability", severity: 95 },
      { name: "Military pressure", severity: 90 },
      { name: "Economic decline", severity: 80 },
      { name: "Social fragmentation", severity: 70 },
    ],
    timeline: [
      {
        year: "235 AD",
        title: "Crisis Of The Third Century",
        category: "Politics",
        description:
          "The empire entered a long period of civil wars, short reigns, and political instability.",
      },
      {
        year: "395 AD",
        title: "Empire Divided",
        category: "Politics",
        description:
          "The Roman Empire was permanently divided into eastern and western administrations.",
      },
      {
        year: "410 AD",
        title: "Sack Of Rome",
        category: "War",
        description:
          "Visigoth forces entered Rome and damaged the image of imperial strength.",
      },
      {
        year: "476 AD",
        title: "End Of The Western Empire",
        category: "Politics",
        description:
          "The last western emperor was removed, marking the symbolic end of the Western Roman Empire.",
      },
    ],
  },
  {
    slug: "maya-civilization",
    name: "Maya Civilization",
    period: "250 AD - 900 AD",
    region: "Mesoamerica",
    collapseType: "Urban decline",
    summary:
      "Many Classic Maya cities declined because of political rivalry, environmental stress, warfare, and pressure on resources.",
    factors: [
      { name: "Climate stress", severity: 85 },
      { name: "Resource pressure", severity: 80 },
      { name: "Warfare", severity: 75 },
      { name: "Political rivalry", severity: 70 },
    ],
    timeline: [
      {
        year: "700 AD",
        title: "City Rivalries Intensify",
        category: "Politics",
        description:
          "Major city-states competed for influence, tribute, and control over regional trade.",
      },
      {
        year: "750 AD",
        title: "Environmental Pressure Grows",
        category: "Climate",
        description:
          "Drought and resource pressure made dense urban life harder to sustain.",
      },
      {
        year: "800 AD",
        title: "Urban Centers Decline",
        category: "Society",
        description:
          "Several major southern lowland cities began losing population and political power.",
      },
      {
        year: "900 AD",
        title: "Classic Maya Collapse",
        category: "Society",
        description:
          "Many major cities were abandoned or greatly reduced in influence.",
      },
    ],
  },
];
