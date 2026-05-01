import { useEffect, useState } from "react";
import type { Route } from "../App";
interface Props {
  current: Route;
  navigate: (r: Route) => void;
}
export default function Nav({ current, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items: { label: string; route: Route }[] = [
    { label: "Shop", route: "product" },
    { label: "About", route: "about" },
  ];
  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => navigate("home")}
            className="font-serif text-[19px] md:text-[21px] tracking-tight text-ink"
            aria-label="NonToxicCo home"
          >
            NonToxic<span className="text-ink-mute">Co.</span>
          </button>
          <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-ink-soft">
            {items.map((it) => (
              <button
                key={it.route}
                onClick={() => navigate(it.route)}
                className={`nav-link ${current === it.route ? "text-ink" : ""}`}
              >
                {it.label}
              </button>
            ))}
            <button className="nav-link">Journal</button>
            <button className="nav-link">Stockists</button>
          </nav>
          <div className="hidden md:flex items-center gap-6 text-[13px] uppercase tracking-[0.18em] text-ink-soft">
            <button className="nav-link">Account</button>
            <button className="nav-link">Bag (0)</button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[13px] uppercase tracking-[0.18em] text-ink"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-8 pt-2 border-t border-ink/10 fade-in">
            <nav className="flex flex-col gap-5 text-[14px] uppercase tracking-[0.18em] text-ink-soft">
              {items.map((it) => (
                <button
                  key={it.route}
                  onClick={() => {
                    navigate(it.route);
                    setOpen(false);
                  }}
                  className="text-left"
                >
                  {it.label}
                </button>
              ))}
              <button className="text-left">Journal</button>
              <button className="text-left">Stockists</button>
              <button className="text-left">Bag (0)</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
