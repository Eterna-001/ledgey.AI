import type { Route } from "../App";
interface Props {
  navigate: (r: Route) => void;
}
export default function Home({ navigate }: Props) {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
          alt="Mist over the European Alps at dawn"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-3xl fade-in">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/80 mb-6">
              Est. 2026 — Zürich
            </div>
            <h1 className="font-serif text-white text-[44px] leading-[1.02] sm:text-6xl md:text-[78px] md:leading-[0.98] tracking-[-0.01em]">
              Oral Care,<br />Without Compromise.
            </h1>
            <p className="mt-8 text-white/85 text-base md:text-lg max-w-md leading-relaxed font-light">
              Non-toxic formulations for the daily ritual. No microplastics, no fluoride controversy, no theatre.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={() => navigate("product")}
                className="bg-bone text-ink px-8 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-colors"
              >
                Shop Now
              </button>
              <button
                onClick={() => navigate("about")}
                className="text-white text-[12px] uppercase tracking-[0.2em] px-2 py-4 nav-link"
              >
                Our Approach
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCT SPOTLIGHT */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-7 md:col-start-1 order-2 md:order-1">
            <div
              className="aspect-[4/5] w-full bg-sand relative overflow-hidden cursor-pointer group"
              onClick={() => navigate("product")}
            >
              {/* Intentional minimal product placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[28%] h-[78%] bg-gradient-to-b from-bone via-sand to-sand-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-[3px] flex flex-col">
                  <div className="mx-auto mt-8 w-[55%] border-t border-ink/30" />
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-serif text-ink text-xl md:text-2xl leading-tight">N°01</div>
                      <div className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-ink-soft">Toothpaste</div>
                      <div className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-ink-mute">Mint &amp; Myrrh</div>
                    </div>
                  </div>
                  <div className="mx-auto mb-8 w-[40%] border-t border-ink/20" />
                </div>
              </div>
              <div className="absolute bottom-5 right-5 text-[11px] uppercase tracking-[0.2em] text-ink-mute opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 order-1 md:order-2">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-6">N°01 — Daily</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
              The Toothpaste.
            </h2>
            <p className="mt-6 text-base text-ink-soft leading-relaxed font-light">
              Hydroxyapatite remineralises. Myrrh tones the gums. Peppermint, sourced from the French Alps, finishes clean.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-2xl text-ink">€24</span>
              <span className="text-[12px] uppercase tracking-[0.2em] text-ink-mute">75ml</span>
            </div>
            <button
              onClick={() => navigate("product")}
              className="mt-8 inline-block border-b border-ink pb-1 text-[12px] uppercase tracking-[0.2em] text-ink"
            >
              View Product
            </button>
          </div>
        </div>
      </section>
      {/* PILLARS */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-6">Why NonToxicCo</div>
              <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
                A higher standard, quietly held.
              </h3>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-base text-ink-soft leading-relaxed font-light">
                We formulate slowly, in small batches, with ingredients you can pronounce. Nothing more, nothing less.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink/10">
            {[
              { n: "01", t: "No Microplastics", d: "Free of PEGs, polymers and synthetic abrasives." },
              { n: "02", t: "Clean Ingredients", d: "Plant-derived, mineral, fully disclosed." },
              { n: "03", t: "Elevated Design", d: "Aluminium tube. Refillable. Made to be seen." },
              { n: "04", t: "Daily Essential", d: "Built for the ritual. Twice a day, every day." },
            ].map((p) => (
              <div key={p.n} className="bg-bone p-8 md:p-10 min-h-[260px] flex flex-col">
                <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute">{p.n}</div>
                <div className="font-serif text-2xl text-ink mt-10">{p.t}</div>
                <div className="text-sm text-ink-soft leading-relaxed mt-4 font-light">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* LIFESTYLE / EDITORIAL */}
      <section className="bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="aspect-[5/4] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=80"
                  alt="Still water and forest, soft natural light"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-6">The Source</div>
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.1] tracking-[-0.01em] text-ink">
                Drawn from quieter places.
              </h3>
              <p className="mt-6 text-base text-ink-soft leading-relaxed font-light">
                Alpine water. European botanicals. Producers we know by name.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST STATEMENT */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-32 md:py-44 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-10">In Practice</div>
          <p className="font-serif text-3xl md:text-5xl leading-[1.18] tracking-[-0.01em] text-ink">
            “The first oral care I’ve been happy to leave on the counter.
            It belongs there.”
          </p>
          <div className="mt-12 text-[12px] uppercase tracking-[0.22em] text-ink-mute">
            Margot L. — Copenhagen
          </div>
        </div>
      </section>
    </div>
  );
}
