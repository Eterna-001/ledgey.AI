import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
export type Route = "home" | "product" | "about";
export default function App() {
  const [route, setRoute] = useState<Route>(() => {
    const hash = window.location.hash.replace("#/", "") as Route;
    return (["home", "product", "about"] as const).includes(hash as Route) ? hash : "home";
  });
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#/", "") as Route;
      const next = (["home", "product", "about"] as const).includes(hash as Route) ? hash : "home";
      setRoute(next);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = (r: Route) => {
    window.location.hash = `#/${r}`;
  };
  return (
    <div className="min-h-screen bg-bone text-ink flex flex-col">
      <Nav current={route} navigate={navigate} />
      <main className="flex-1">
        {route === "home" && <Home navigate={navigate} />}
        {route === "product" && <Product navigate={navigate} />}
        {route === "about" && <About />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
