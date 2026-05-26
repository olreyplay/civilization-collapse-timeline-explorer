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
  {
    slug: "byzantine-empire",
    name: "Byzantine Empire",
    period: "330 AD - 1453 AD",
    region: "Eastern Mediterranean, Anatolia, Balkans",
    collapseType: "Imperial conquest",
    summary:
      "The Eastern Roman Empire endured for centuries but gradually lost territory, revenue, and military capacity before Constantinople fell to the Ottomans.",
    factors: [
      { name: "Military defeats", severity: 90 },
      { name: "Territorial loss", severity: 85 },
      { name: "Economic strain", severity: 80 },
      { name: "Dynastic instability", severity: 65 },
    ],
    timeline: [
      {
        year: "1071 AD",
        title: "Battle Of Manzikert",
        category: "War",
        description:
          "Seljuk victory opened Anatolia to Turkish settlement and weakened imperial control of core lands.",
      },
      {
        year: "1204 AD",
        title: "Sack Of Constantinople",
        category: "War",
        description:
          "Crusader forces looted the capital during the Fourth Crusade, fracturing imperial recovery.",
      },
      {
        year: "1354 AD",
        title: "Ottomans In Europe",
        category: "War",
        description:
          "Ottoman footholds in the Balkans shifted the strategic balance against the empire.",
      },
      {
        year: "1453 AD",
        title: "Fall Of Constantinople",
        category: "War",
        description:
          "Ottoman forces captured the city, ending the Byzantine state.",
      },
    ],
  },
  {
    slug: "akkadian-empire",
    name: "Akkadian Empire",
    period: "2334 BC - 2154 BC",
    region: "Mesopotamia",
    collapseType: "State disintegration",
    summary:
      "The world's first multi-ethnic empire unraveled amid rebellion, famine, and invasion after a period of rapid expansion under Sargon and his successors.",
    factors: [
      { name: "Climate disruption", severity: 90 },
      { name: "Famine", severity: 85 },
      { name: "Rebellion", severity: 80 },
      { name: "Invasion", severity: 75 },
    ],
    timeline: [
      {
        year: "2200 BC",
        title: "Megadrought Begins",
        category: "Climate",
        description:
          "A prolonged arid period stressed agriculture across Mesopotamia and weakened tribute systems.",
      },
      {
        year: "2193 BC",
        title: "Cursing Of Akkad",
        category: "Society",
        description:
          "Later texts describe famine and social breakdown as divine punishment for imperial hubris.",
      },
      {
        year: "2154 BC",
        title: "Gutian Incursions",
        category: "War",
        description:
          "Gutian groups from the Zagros disrupted control and contributed to the empire's final collapse.",
      },
      {
        year: "2154 BC",
        title: "End Of Akkadian Rule",
        category: "Politics",
        description:
          "Central authority collapsed and Mesopotamia fragmented into competing city-states.",
      },
    ],
  },
  {
    slug: "mycenaean-greece",
    name: "Mycenaean Greece",
    period: "1600 BC - 1100 BC",
    region: "Aegean, Greek mainland",
    collapseType: "Systemic collapse",
    summary:
      "Palace-centered states across the Aegean declined together during the Late Bronze Age collapse, marked by abandonment, depopulation, and lost literacy.",
    factors: [
      { name: "Invasion and raids", severity: 85 },
      { name: "Earthquakes", severity: 75 },
      { name: "Trade disruption", severity: 80 },
      { name: "Climate change", severity: 70 },
    ],
    timeline: [
      {
        year: "1250 BC",
        title: "Troy And Regional Warfare",
        category: "War",
        description:
          "Conflicts among Aegean powers strained alliances and palace economies.",
      },
      {
        year: "1200 BC",
        title: "Palace Burnings",
        category: "Society",
        description:
          "Major centers including Mycenae, Pylos, and Thebes show destruction layers and abandonment.",
      },
      {
        year: "1150 BC",
        title: "Sea Peoples Raids",
        category: "War",
        description:
          "Maritime raids disrupted eastern Mediterranean trade networks relied on by palace states.",
      },
      {
        year: "1100 BC",
        title: "Greek Dark Ages Begin",
        category: "Society",
        description:
          "Population fell, writing disappeared, and simpler village life replaced palace civilization.",
      },
    ],
  },
  {
    slug: "khmer-empire",
    name: "Khmer Empire",
    period: "802 AD - 1431 AD",
    region: "Southeast Asia",
    collapseType: "Gradual decline",
    summary:
      "Angkor's vast hydraulic civilization weakened through environmental stress, costly building programs, Thai pressure, and shifting trade routes.",
    factors: [
      { name: "Water management failure", severity: 85 },
      { name: "Military pressure", severity: 80 },
      { name: "Economic overextension", severity: 75 },
      { name: "Climate variability", severity: 70 },
    ],
    timeline: [
      {
        year: "1296 AD",
        title: "Sukhothai Rises",
        category: "Politics",
        description:
          "Thai kingdoms challenged Khmer dominance in the western territories.",
      },
      {
        year: "1351 AD",
        title: "Ayutthaya Founded",
        category: "War",
        description:
          "A powerful Thai rival emerged, redirecting regional power away from Angkor.",
      },
      {
        year: "1431 AD",
        title: "Sack Of Angkor",
        category: "War",
        description:
          "Ayutthaya forces captured the capital, accelerating abandonment of the urban core.",
      },
      {
        year: "1500 AD",
        title: "Angkor Largely Abandoned",
        category: "Society",
        description:
          "The court moved south; jungle reclaimed temples and canal networks.",
      },
    ],
  },
  {
    slug: "han-dynasty",
    name: "Han Dynasty (Western)",
    period: "206 BC - 220 AD",
    region: "East Asia",
    collapseType: "Dynastic collapse",
    summary:
      "The Han unified China for centuries but fell after court intrigue, peasant revolts, warlordism, and plague weakened central authority.",
    factors: [
      { name: "Peasant rebellion", severity: 90 },
      { name: "Warlord fragmentation", severity: 85 },
      { name: "Court corruption", severity: 75 },
      { name: "Plague and famine", severity: 70 },
    ],
    timeline: [
      {
        year: "184 AD",
        title: "Yellow Turban Rebellion",
        category: "Society",
        description:
          "A massive peasant uprising spread across the empire, exposing weak local governance.",
      },
      {
        year: "189 AD",
        title: "Warlord Era Begins",
        category: "Politics",
        description:
          "Military strongmen seized power after the emperor's death, ending stable court rule.",
      },
      {
        year: "200 AD",
        title: "Battle Of Guandu",
        category: "War",
        description:
          "Cao Cao's victory consolidated northern power and deepened the split among rival factions.",
      },
      {
        year: "220 AD",
        title: "Last Han Emperor Abdicates",
        category: "Politics",
        description:
          "The emperor surrendered to Cao Pi, formally ending the Han and opening the Three Kingdoms period.",
      },
    ],
  },
  {
    slug: "indus-valley",
    name: "Indus Valley Civilization",
    period: "3300 BC - 1300 BC",
    region: "South Asia",
    collapseType: "Urban de-urbanization",
    summary:
      "Harappan cities like Mohenjo-daro and Harappa declined as trade shifted, rivers changed course, and regional cultures replaced unified urban planning.",
    factors: [
      { name: "River system change", severity: 85 },
      { name: "Trade decline", severity: 75 },
      { name: "Environmental stress", severity: 70 },
      { name: "Cultural transformation", severity: 65 },
    ],
    timeline: [
      {
        year: "1900 BC",
        title: "Mohenjo-daro Decline",
        category: "Society",
        description:
          "The great city shows signs of reduced maintenance, flooding damage, and population loss.",
      },
      {
        year: "1800 BC",
        title: "Harappa Abandoned",
        category: "Society",
        description:
          "Major urban centers were depopulated or reorganized into smaller settlements.",
      },
      {
        year: "1700 BC",
        title: "Script Disappears",
        category: "Society",
        description:
          "Indus writing ceased to be used, cutting off a key marker of cultural continuity.",
      },
      {
        year: "1300 BC",
        title: "Post-Harappan Cultures",
        category: "Politics",
        description:
          "Regional Iron Age cultures replaced the integrated Bronze Age urban network.",
      },
    ],
  },
  {
    slug: "olmec-civilization",
    name: "Olmec Civilization",
    period: "1200 BC - 400 BC",
    region: "Mesoamerica",
    collapseType: "Cultural transition",
    summary:
      "The Olmec heartland in Veracruz and Tabasco lost its political center as environmental change and emerging successor cultures reshaped Mesoamerica.",
    factors: [
      { name: "Volcanic activity", severity: 80 },
      { name: "River flooding", severity: 75 },
      { name: "Political decentralization", severity: 70 },
      { name: "Successor cultures", severity: 65 },
    ],
    timeline: [
      {
        year: "900 BC",
        title: "La Venta Peak",
        category: "Society",
        description:
          "La Venta became the dominant ceremonial center, producing colossal heads and pyramid complexes.",
      },
      {
        year: "400 BC",
        title: "San Lorenzo Decline",
        category: "Climate",
        description:
          "Environmental shifts and possible eruptions disrupted the first major Olmec center.",
      },
      {
        year: "400 BC",
        title: "La Venta Abandoned",
        category: "Society",
        description:
          "The principal site was deliberately buried and abandoned, ending Olmec political unity.",
      },
      {
        year: "300 BC",
        title: "Epi-Olmec Traditions",
        category: "Politics",
        description:
          "Later cultures adopted and transformed Olmec art, religion, and urban ideas across Mesoamerica.",
      },
    ],
  },
];
