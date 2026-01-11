"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AnalysisGallery from "./components/AnalysisGallery";
import ValueProposition from "./components/ValueProposition";
import Footer from "./components/Footer";
import { tailwindColors } from "@/lib/theme";

export default function Home() {

  const handleImageClick = (prompt: string) => {
    // Hero 컴포넌트에 프롬프트 전달을 위해 세션 스토리지 사용
    if (typeof window !== "undefined") {
      sessionStorage.setItem("autoPrompt", prompt);
      // Hero 섹션으로 스크롤
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.dispatchEvent(new Event("promptUpdate"));
    }
  };

  return (
    <div className={`min-h-screen ${tailwindColors.background}`}>
      <Header />
      <Hero />
      <Features />
      <AnalysisGallery onImageClick={handleImageClick} />
      <ValueProposition />
      <Footer />
    </div>
  );
}
