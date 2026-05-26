export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
          Historical Timeline Explorer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Explore How Great Civilizations Collapsed
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Analyze wars, political instability, climate events, and economic
          decline across history.
        </p>

        <button className="mt-10 rounded-full border border-[#c6a972] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#c6a972] hover:text-black">
          Start Exploring
        </button>
      </section>
    </main>
  );
}
