import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Guardian from "@/components/Guardian";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050d1a] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Guardian />
      <Footer />
    </main>
  );
}
