"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { layout, typography } from "@/lib/theme";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS 설정 값들
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // 환경 변수 검증 및 디버깅 정보
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS 환경 변수가 설정되지 않았습니다.");
      console.error("현재 환경 변수 상태:", {
        serviceId: serviceId ? "설정됨" : "없음",
        templateId: templateId ? "설정됨" : "없음",
        publicKey: publicKey ? "설정됨" : "없음",
        currentDomain: typeof window !== "undefined" ? window.location.hostname : "서버",
      });
      alert("이메일 전송 설정에 문제가 있습니다. 관리자에게 문의해주세요.");
      setIsSending(false);
      return;
    }

    try {
      const templateParams = {
        name: formData.name, // 템플릿의 {{name}} (From Name)에 사용
        email: formData.email, // 템플릿의 {{email}} (Reply To)에 사용
        message: formData.message, // 템플릿의 {{message}}에 사용
      };

      // EmailJS 초기화 (도메인 제한 문제 해결을 위해)
      if (typeof window !== "undefined") {
        emailjs.init(publicKey);
      }

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log("이메일 전송 성공:", response);
      alert("문의가 성공적으로 전송되었습니다!");
      handleCloseModal();
    } catch (error) {
      console.error("이메일 전송 실패:", error);
      
      // 상세한 에러 정보 추출
      let errorMessage = "알 수 없는 오류";
      let errorDetails = "";

      if (error instanceof Error) {
        errorMessage = error.message;
        errorDetails = error.stack || "";
      } else if (typeof error === 'object' && error !== null) {
        if ('text' in error) {
          errorMessage = String(error.text);
        } else if ('status' in error) {
          errorMessage = `HTTP ${error.status}: ${error.text || "요청 실패"}`;
        }
      }

      // 에러 타입별 안내 메시지
      if (errorMessage.includes("Invalid public key") || errorMessage.includes("public key")) {
        errorMessage = "EmailJS Public Key가 유효하지 않습니다. 환경 변수를 확인해주세요.";
      } else if (errorMessage.includes("domain") || errorMessage.includes("origin")) {
        errorMessage = "도메인이 EmailJS에 등록되지 않았습니다. EmailJS 대시보드에서 도메인을 추가해주세요.";
      } else if (errorMessage.includes("service") || errorMessage.includes("Service")) {
        errorMessage = "EmailJS Service ID가 유효하지 않습니다.";
      } else if (errorMessage.includes("template") || errorMessage.includes("Template")) {
        errorMessage = "EmailJS Template ID가 유효하지 않습니다.";
      }

      console.error("에러 상세 정보:", {
        errorMessage,
        errorDetails,
        serviceId,
        templateId,
        publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : "없음",
        currentDomain: typeof window !== "undefined" ? window.location.hostname : "서버",
      });

      alert(`이메일 전송에 실패했습니다.\n\n${errorMessage}\n\n문제가 계속되면 관리자에게 문의해주세요.`);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 홈으로 이동하면서 새로고침
    window.location.href = "/";
  };

  return (
    <>
      <header className={layout.header.section}>
        <div className={layout.header.container}>
          <div className="flex h-16 items-center justify-between">
            {/* 로고 (왼쪽) */}
            <div className="flex items-center">
              <Link href="/" onClick={handleLogoClick} className="flex items-center">
                <Image
                  src="/img/header/xiassist_logo.png"
                  alt="XIAssist Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* 네비게이션 (가운데) */}
            <nav className="flex items-center gap-8">
              <button
                onClick={handleOpenModal}
                className="cursor-pointer text-lg font-bold text-white md:text-xl hover:text-primary-500 transition-colors"
              >
                문의하기
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 이메일 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md mx-4 bg-[#121C21] rounded-lg border border-gray-700 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 rounded-full bg-gray-700 p-2 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
              aria-label="닫기"
            >
              <svg
                className="h-5 w-5"
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

            <h2 className="text-2xl font-bold text-white mb-6">문의하기</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  placeholder="문의 내용을 입력하세요"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {isSending ? "전송 중..." : "이메일 보내기"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

