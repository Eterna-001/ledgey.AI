import { useState } from "react";
import type { Route } from "../App";
interface Props {
  navigate: (r: Route) => void;
}
export default function Product({ navigate }: Props) {
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState<"single" | "double" | "set">("single");
  const price = variant === "single" ? 24 : variant === "double" ? 44 : 68;
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <button onClick={() => navigate("home")} className="hover:text-ink">Home</button>
          <span className="mx-2">/</span>
          <span>Toothpaste</span>
        </div>
      </div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Image area */}
          <div className="md:col-span-7 md:col-start-1">
            <div className="aspect-[4/5] w-full bg-sand relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[24%] h-[80%] bg-gradient-to-b from-bone via-sand to-sand-deep shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)] rounded-[3px] flex flex-col">
                  <div className="mx-auto mt-10 w-[55%] border-t border-ink/30" />
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-serif text-ink text-2xl">N°01</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ink-soft">Toothpaste</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ink-mute">Mint &amp; Myrrh</div>
                    </div>
                  </div>
                  <div className="mx-auto mb-10 w-[40%] border-t border-ink/20" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square bg-sand/60" />
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="md:col-span-4 md:col-start-9 md:sticky md:top-28 self-start">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-5">N°01 — Daily</div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
              The Toothpaste.
            </h1>
            <div className="mt-3 text-sm text-ink-mute">Mint &amp; Myrrh · 75ml</div>
            <div className="mt-8 font-serif text-2xl text-ink">€{price}</div>
            <div className="mt-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">Format</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "single", label: "1 Tube", sub: "€24" },
                  { id: "double", label: "Duo", sub: "€44" },
                  { id: "set", label: "The Set", sub: "€68" },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id as typeof variant)}
                    className={`border px-3 py-4 text-left transition-colors ${
                      variant === v.id
                        ? "border-ink bg-ink text-bone"
                        : "border-ink/20 text-ink hover:border-ink/60"
                    }`}
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em]">{v.label}</div>
                    <div className={`text-[11px] mt-1 ${variant === v.id ? "text-bone/70" : "text-ink-mute"}`}>
                      {v.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-ink/20">
                <button
                  className="px-4 text-ink"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <div className="w-8 text-center text-sm">{qty}</div>
                <button
                  className="px-4 text-ink"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-ink text-bone px-6 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-ink-soft transition-colors">
                Add to Bag — €{price * qty}
              </button>
            </div>
            <div className="mt-6 text-[12px] text-ink-mute leading-relaxed">
              Complimentary shipping above €60. Carbon-neutral delivery in Europe.
            </div>
            {/* Specs */}
            <div className="mt-12 border-t border-ink/15">
              {[
                {
                  t: "What it is",
                  d: "A daily mineral toothpaste. Hydroxyapatite for remineralisation. Myrrh, sage and peppermint for tone and finish.",
                },
                {
                  t: "Why it’s better",
                  d: "Free of fluoride, SLS, microplastics, parabens and artificial sweeteners. Made in Switzerland in small batches.",
                },
                {
                  t: "How to use",
                  d: "Twice daily. A pea-sized amount on a soft brush. Two minutes, no rush.",
                },
                {
                  t: "Ingredients",
                  d: "Glycerin, hydroxyapatite, silica, xylitol, peppermint oil, myrrh extract, sage extract, sodium bicarbonate.",
                },
              ].map((row, i) => (
                <Disclosure key={i} title={row.t} defaultOpen={i === 0}>
                  {row.d}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Pairing */}
      <section className="border-t border-ink/10 bg-sand/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink-mute mb-4">Pairs With</div>
              <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight">The complete ritual.</h3>
            </div>
            <button onClick={() => navigate("home")} className="hidden md:block text-[12px] uppercase tracking-[0.2em] nav-link">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { n: "N°02", t: "The Toothbrush", p: "€38" },
              { n: "N°03", t: "The Mouthwash", p: "€28" },
              { n: "N°04", t: "The Floss", p: "€16" },
            ].map((it) => (
              <div key={it.n} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-bone border border-ink/5 mb-4" />
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-ink-mute">{it.n}</div>
                    <div className="font-serif text-lg text-ink mt-1">{it.t}</div>
                  </div>
                  <div className="text-sm text-ink-soft">{it.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function Disclosure({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] uppercase tracking-[0.22em] text-ink">{title}</span>
        <span className="text-ink-mute text-lg leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-6 text-sm text-ink-soft leading-relaxed font-light fade-in">{children}</div>
      )}
    </div>
  );
}
