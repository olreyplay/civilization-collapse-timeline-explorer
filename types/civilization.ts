export type CollapseFactor = {
  name: string;
  severity: number;
};

export type TimelineEvent = {
  year: string;
  title: string;
  category: "Economy" | "War" | "Climate" | "Politics" | "Society";
  description: string;
};

export type Civilization = {
  slug: string;
  name: string;
  period: string;
  region: string;
  collapseType: string;
  summary: string;
  factors: CollapseFactor[];
  timeline: TimelineEvent[];
};
