import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XiAssist | 의료 척추 X-ray 분석 AI 보조 솔루션",
  description:
    "XiAssist는 의료진의 진단을 대체하지 않고, X-ray 기반 척추 정렬·각도·거리 지표를 AI로 자동 생성하는 의료 분석 보조 솔루션입니다.",
  keywords: [
    "XiAssist",
    "엑스레이 분석",
    "X-ray AI",
    "의료 AI",
    "척추 X-ray",
    "의료 영상 분석",
    "X-ray Helper",
  ],
  verification: {
    other: {
      "naver-site-verification": "75e7aa021733e6005c3ecb556baee45397ce3b5a",
    },
  },
  alternates: {
    canonical: "https://www.xiassist.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
