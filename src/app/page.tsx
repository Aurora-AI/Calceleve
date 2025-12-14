import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-brand-primary">
      <Navbar />
      <Hero />
    </main>
  );
}
