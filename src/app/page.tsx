import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { TechTicker } from "@/components/tech-ticker";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TechTicker />
      </main>
    </div>
  );
}
