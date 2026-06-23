export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-6">
          Strategy Decode
        </p>

        <h1 className="text-7xl md:text-9xl font-bold leading-none max-w-5xl">
          The strategies behind the world's most successful companies.
        </h1>

        <p className="text-xl text-gray-400 mt-10 max-w-2xl">
          Deep breakdowns of the systems, decisions and frameworks used by
          founders, CEOs and billion-dollar businesses.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="border border-neutral-800 rounded-3xl overflow-hidden">
          <div className="h-[500px] bg-neutral-900"></div>

          <div className="p-10">
            <p className="text-yellow-500 text-sm uppercase mb-4">
              Featured Analysis
            </p>

            <h2 className="text-5xl font-bold mb-6">
              How Red Bull Built A Media Empire
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl">
              Most people think Red Bull sells energy drinks. In reality,
              Red Bull built one of the most powerful media companies in the
              world and used content to dominate an entire category.
            </p>

            <div className="mt-8 text-sm text-gray-500">
              12 min read
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}