"use client";

import { useState } from "react";
import { layout, typography, tailwindColors } from "@/lib/theme";

interface GalleryImage {
  id: number;
  prompt: string;
  src?: string;
  hoverText?: string;
}

export default function AnalysisGallery({
  onImageClick,
}: {
  onImageClick: (prompt: string) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 2x1 이미지 박스 데이터
  const topImages: GalleryImage[] = [
    { 
      id: 1, 
      prompt: "첫 번째 예시 이미지 프롬프트입니다",
      src: "/img/analysisgallery/capture.png",
      hoverText: "기존 Pacs 영상에 적용"
    },
    { 
      id: 2, 
      prompt: "두 번째 예시 이미지 프롬프트입니다",
      src: "/img/analysisgallery/analysis.png",
      hoverText: "검증된 의학공식 인용"
    },
  ];

  // 4x4 그리드 이미지 데이터
  const gridImageNames = [
    'cervical_la_1.png', 'cervical_la_2.png', 'cervical_la_3.png', 'cervical_la_4.png',
    'lumbar_ap_1.png', 'lumbar_ap_2.png', 'lumbar_ap_3.png', 'lumbar_ap_4.png',
    'lumbar_la_1.png', 'lumbar_la_2.png', 'lumbar_la_3.png', 'lumbar_la_4.png',
    'pelvis_ap_1.png', 'pelvis_ap_2.png', 'pelvis_ap_3.png', 'pelvis_ap_4.png',
  ];
  
  const gridImages: GalleryImage[] = gridImageNames.map((imageName, i) => ({
    id: i + 3,
    prompt: `${imageName} 프롬프트`,
    src: `/img/analysisgallery/${imageName}`,
  }));

  const handleImageClick = (imagePrompt: string) => {
    onImageClick(imagePrompt);
  };

  const handleGridImageClick = (imageSrc: string) => {
    // 파일명에서 -2 버전 생성 (예: cervical_la_1.png → cervical_la_1-2.png)
    const imagePathWithoutExtension = imageSrc.replace(/\.png$/, '');
    const imageWithSuffix = `${imagePathWithoutExtension}-2.png`;
    setSelectedImage(imageWithSuffix);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className={layout.gallery.section}>
      <div className={layout.container}>
        {/* 제목과 부제 */}
        <div className={layout.gallery.header}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-[#2196F3]">
            ANALYSIS GALLERY
          </h2>
          <p className={layout.gallery.subtitle}>
            3번클릭, 3초안에 100가지 지표 생성
          </p>
        </div>

        {/* 2x1 이미지 박스 (가로로 나열) */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {topImages.map((image) => (
            <div
              key={image.id}
              className={layout.gallery.imageCard}
            >
              {image.src ? (
                <div className={`relative flex h-full w-full items-center justify-center ${tailwindColors.background}`}>
                  <img
                    src={image.src}
                    alt={image.prompt}
                    className="h-full w-full object-contain"
                  />
                  {/* 호버 시 안내 텍스트 오버레이 */}
                  {image.hoverText && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-center text-3xl font-semibold text-white px-4">
                        {image.hoverText}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className={layout.gallery.imagePlaceholder}>
                  <p className={`${typography.body.sm} group-hover:text-gray-700`}>
                    이미지를 업로드하세요
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4x4 정사각형 이미지 그리드 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gridImages.map((image) => (
            <div
              key={image.id}
              onClick={() => image.src && handleGridImageClick(image.src)}
              className={layout.gallery.imageCardSquare}
            >
              {image.src ? (
                <div className={`flex h-full w-full items-center justify-center ${tailwindColors.background}`}>
                  <img
                    src={image.src}
                    alt={image.prompt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className={layout.gallery.imagePlaceholder}>
                  <p className={`${typography.body.xs} group-hover:text-gray-700`}>
                    이미지 {image.id}
                  </p>
                </div>
              )}
            </div>
          ))}
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

