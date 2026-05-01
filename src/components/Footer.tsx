import type { Route } from "../App";
interface Props {
  navigate: (r: Route) => void;
}
export default function Footer({ navigate }: Props) {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="font-serif text-2xl md:text-3xl text-ink leading-tight max-w-sm">
              Quiet rituals. <br /> Considered ingredients.
            </div>
            <p className="mt-6 text-sm text-ink-mute max-w-sm leading-relaxed">
              Receive new formulations, essays on daily ritual, and early access. No noise.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center border-b border-ink/30 max-w-sm"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:outline-none"
              />
              <button
                type="submit"
                className="text-[12px] uppercase tracking-[0.2em] text-ink py-3"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-mute mb-5">Shop</div>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><button onClick={() => navigate("product")} className="hover:text-ink">Toothpaste</button></li>
              <li><button className="hover:text-ink">Toothbrush</button></li>
              <li><button className="hover:text-ink">Mouthwash</button></li>
              <li><button className="hover:text-ink">The Set</button></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-mute mb-5">Studio</div>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><button onClick={() => navigate("about")} className="hover:text-ink">About</button></li>
              <li><button className="hover:text-ink">Ingredients</button></li>
              <li><button className="hover:text-ink">Journal</button></li>
              <li><button className="hover:text-ink">Stockists</button></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-mute mb-5">Service</div>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><button className="hover:text-ink">Contact</button></li>
              <li><button className="hover:text-ink">Shipping</button></li>
              <li><button className="hover:text-ink">Returns</button></li>
              <li><button className="hover:text-ink">FAQ</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between gap-4 text-[12px] text-ink-mute uppercase tracking-[0.18em]">
          <div>© {new Date().getFullYear()} NonToxicCo. Made in Europe.</div>
          <div className="flex gap-6">
            <button>Privacy</button>
            <button>Terms</button>
            <button>Imprint</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
