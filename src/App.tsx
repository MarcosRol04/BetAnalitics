import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsSection } from "./components/StatsSection";
import { AnalysisSection } from "./components/AnalysisSection";
import { MethodologySection } from "./components/MethodologySection";
import { ResultsSection } from "./components/ResultsSection";
import { TelegramSection } from "./components/TelegramSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AnalysisSection />
        <MethodologySection />
        <ResultsSection />
        <TelegramSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
