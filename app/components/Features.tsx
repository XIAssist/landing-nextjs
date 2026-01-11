"use client";

import { useState } from "react";
import { layout, typography, tailwindColors } from "@/lib/theme";

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = () => {
    setSelectedImage("/img/features/features.png");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className={`flex min-h-screen items-center ${tailwindColors.background} py-20 lg:py-32`}>
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-3 lg:items-center">
          {/* 좌측: 텍스트 컨텐츠 (1/3) */}
          <div className="space-y-6 lg:col-span-1">
            <h2 className={typography.heading.section}>
              <span className={tailwindColors.primary.text}>진단</span>이 아닌 <span className={tailwindColors.primary.text}>지표</span>생성
            </h2>
            <p className={typography.body.large}>
              1. 치료이유와 효과를 수치화 하여 <br />
              👉 <span className={tailwindColors.primary.text}>도수삭감 방지</span>
              <br />
              2. 척추의 불균형을 시각화 하여 <br />
              👉 <span className={tailwindColors.primary.text}>전문성</span>을 보여줌 
              <br />
              3. 명확한 수치를 제공하여 <br />
              👉 환자의 <span className={tailwindColors.primary.text}>이해</span>를 돕고 환자에게 <span className={tailwindColors.primary.text}>목표</span>를 제시
              <br />
              4. 빠르게 지표들을 본후 <br />
              👉 <span className={tailwindColors.primary.text}>치료방향</span>을 환자와 치료사에게 <span className={tailwindColors.primary.text}>지시</span> 
            </p>
            <div className="space-y-4">
              {/* 특징 리스트 등 추가 가능 */}
            </div>
          </div>

          {/* 우측: 이미지 (2/3) */}
          <div className="lg:col-span-2">
            <div 
              className={`relative h-[600px] w-full overflow-hidden lg:h-[700px] cursor-pointer ${tailwindColors.background}`}
              onClick={handleImageClick}
            >
              <img
                src="/img/features/features.png"
                alt="특징 이미지"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -right-12 -top-12 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
              aria-label="닫기"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="확대된 이미지"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

