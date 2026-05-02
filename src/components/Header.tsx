import { useEffect, useState } from "react";
import type { Route } from "../App";
type Props = {
  route: Route;
  navigate: (r: Route) => void;
};
export default function Header({ route, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const link = (label: string, target: Route) => (
    <button
      onClick={() => {
        navigate(target);
        setOpen(false);
      }}
      className={`text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${
        route === target ? "opacity-100" : "opacity-70"
      }`}
    >
      {label}
    </button>
  );
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || route !== "home"
          ? "bg-bone/90 backdrop-blur border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <button
          onClick={() => navigate("home")}
          className="font-serif text-xl tracking-tight text-ink"
          aria-label="Maren home"
        >
          Maren
        </button>
        <nav className="hidden items-center gap-10 md:flex">
          {link("Shop", "product")}
          {link("Journal", "home")}
          {link("About", "about")}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <button className="text-[11px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100">
            Account
          </button>
          <button className="text-[11px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100">
            Bag (0)
          </button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[11px] uppercase tracking-[0.22em]"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/5 bg-bone">
          <div className="flex flex-col gap-6 px-6 py-8">
            {link("Shop", "product")}
            {link("Journal", "home")}
            {link("About", "about")}
            <div className="h-px bg-ink/10" />
            <button className="text-left text-[11px] uppercase tracking-[0.22em] opacity-70">
              Account
            </button>
            <button className="text-left text-[11px] uppercase tracking-[0.22em] opacity-70">
              Bag (0)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
