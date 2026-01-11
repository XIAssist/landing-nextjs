"use client";

import { useState, useEffect, useRef } from "react";
import { layout, typography } from "@/lib/theme";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  // 세션 스토리지에서 프롬프트 가져오기 (예시 이미지 클릭 시)
  useEffect(() => {
    const handlePromptUpdate = () => {
      const autoPrompt = sessionStorage.getItem("autoPrompt");
      if (autoPrompt) {
        setPrompt(autoPrompt);
        sessionStorage.removeItem("autoPrompt");
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener("promptUpdate", handlePromptUpdate);

    // 컴포넌트 마운트 시에도 확인
    handlePromptUpdate();

    return () => {
      window.removeEventListener("promptUpdate", handlePromptUpdate);
    };
  }, []);

  // 동영상 자동 재생 강제
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 동영상 자동 재생 실패 (무시)
      });
    }
  }, []);

  return (
    <section className={layout.hero.section}>
      {/* 동영상 배경 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/img/hero/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* 반투명 오버레이 (텍스트 가독성을 위해) */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* 컨텐츠 영역 */}
      <div className={layout.hero.container}>
        <div className={layout.container}>
          <div className={layout.hero.content}>
            {/* 제목 */}
            <div className="relative mb-6 inline-block">
              <h1 className={typography.heading.hero}>
                X-ray 척추 분석 솔루션
              </h1>
            </div>

            {/* 부제 */}
            <p className={`mb-12 ${typography.body.large}`}>
            의사의 전문화된 판단에 객관적 근거를 시각화
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

