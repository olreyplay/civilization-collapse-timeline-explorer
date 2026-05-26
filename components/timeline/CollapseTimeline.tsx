import { TimelineEvent } from "@/types/civilization";

type CollapseTimelineProps = {
  events: TimelineEvent[];
};

export function CollapseTimeline({ events }: CollapseTimelineProps) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[#2d2d2d] bg-[#181818] p-8 md:p-12">
      <p className="text-sm uppercase tracking-[0.25em] text-[#c6a972]">
        Collapse Timeline
      </p>

      <h2 className="mt-4 text-4xl font-bold">Key Events</h2>

      <div className="mt-10 space-y-8 border-l border-[#2d2d2d] pl-6">
        {events.map((event) => (
          <article key={`${event.year}-${event.title}`} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#c6a972]" />

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold text-[#c6a972]">
                {event.year}
              </p>

              <span className="rounded-full border border-[#2d2d2d] px-3 py-1 text-xs text-gray-300">
                {event.category}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold">{event.title}</h3>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
