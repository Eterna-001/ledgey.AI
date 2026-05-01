export default function About() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-40 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute">Studio</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.015em] text-ink">
              Eliminating the toxins<br />
              <span className="text-ink-mute">we never agreed to.</span>
            </h1>
          </div>
        </div>
      </section>
      {/* Image */}
      <section>
        <div className="w-full aspect-[16/8] md:aspect-[16/7] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
            alt="Snow-capped European mountain range"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
      {/* Mission */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute">Mission</div>
          </div>
          <div className="md:col-span-7">
            <p className="font-serif text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] text-ink">
              Personal care has been quietly compromised. We make oral care that isn’t.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-ink-soft leading-relaxed font-light">
              <p>
                NonToxicCo began in a small lab outside Zürich. The brief was narrow: remove what shouldn’t be there. Microplastics. SLS. Endocrine disruptors. Sweeteners that don’t belong in a mouth twice a day.
              </p>
              <p>
                What remained — minerals, plant extracts, alpine water — became the formula. Slow to make. Easy to use. Designed to be left out, not hidden away.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Principles */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute">Principles</div>
            </div>
            <div className="md:col-span-7">
              <ul className="divide-y divide-ink/15">
                {[
                  ["Substance over story", "Formulation comes first. Marketing follows."],
                  ["Disclosed in full", "Every ingredient. Every supplier. Public."],
                  ["Made to last", "Refillable. Recyclable. Quietly built."],
                  ["European, by hand", "Switzerland, France, Italy. Small batches."],
                ].map(([t, d]) => (
                  <li key={t} className="py-7 grid grid-cols-12 gap-6 items-baseline">
                    <div className="col-span-12 md:col-span-5 font-serif text-xl md:text-2xl text-ink">
                      {t}
                    </div>
                    <div className="col-span-12 md:col-span-7 text-sm md:text-base text-ink-soft font-light leading-relaxed">
                      {d}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Quiet image */}
      <section>
        <div className="w-full aspect-[16/9] md:aspect-[16/8] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80"
            alt="Calm lake reflecting forested mountains"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
      {/* Closing */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-32 md:py-44 text-center">
        <p className="font-serif text-3xl md:text-5xl leading-[1.18] tracking-[-0.01em] text-ink">
          A daily ritual deserves better than what was given to it.
        </p>
        <div className="mt-10 text-[12px] uppercase tracking-[0.22em] text-ink-mute">
          NonToxicCo — Zürich
        </div>
      </section>
    </div>
  );
}
