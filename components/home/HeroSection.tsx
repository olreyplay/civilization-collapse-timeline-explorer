export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3a2f1d_0%,#0f0f0f_45%)]" />

      <div className="relative z-10 max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
          Historical Timeline Explorer
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Explore How Great Civilizations Collapsed
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Analyze wars, political instability, climate events, and economic
          decline across history.
        </p>

        <a
          href="#civilizations"
          className="mt-10 inline-block rounded-full border border-[#c6a972] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#c6a972] hover:text-black"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
