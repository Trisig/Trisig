import Navbar from "@/components/Navbar";
import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import Stats from "@/components/homepage/Stats";
import Guardian from "@/components/homepage/Guardian";
import Footer from "@/components/homepage/Footer";

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
