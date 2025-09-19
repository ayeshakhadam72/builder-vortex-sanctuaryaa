import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ContentSection />
      </main>
    </div>
  );
}
