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
    if (typeof window !== "undefined") {
      sessionStorage.setItem("autoPrompt", prompt);
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.dispatchEvent(new Event("promptUpdate"));
    }
  };

  return (
    <main className={`min-h-screen ${tailwindColors.background}`}>
      {/* ✅ 네이버 SEO용 핵심 텍스트 (시각적으로는 숨김) */}
      <section className="sr-only">
        <h1>XiAssist 의료 척추 X-ray 분석 AI 보조 솔루션</h1>
        <p>
          XiAssist는 X-ray 영상을 기반으로 척추 정렬, 각도, 거리 지표를
          AI로 자동 분석하여 의료진의 진단과 설명을 보조하는
          의료 영상 분석 플랫폼입니다.
        </p>
        <p>
          본 서비스는 진단을 대체하지 않으며,
          의료 현장에서 객관적인 지표 생성을 지원합니다.
        </p>
      </section>

      <Header />
      <Hero />
      <Features />
      <AnalysisGallery onImageClick={handleImageClick} />
      <ValueProposition />
      <Footer />
    </main>
  );
}
