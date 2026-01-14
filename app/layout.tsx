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
  title: "X-ray Helper - 의사의 전문적인 진단에 객관적인 지표생성",
  description: "AI 기반 X-ray 분석 서비스. 3초 안에 모든 지표를 생성하는 X-ray Helper",
  verification: {
    other: {
      "naver-site-verification": "75e7aa021733e6005c3ecb556baee45397ce3b5a",
    },
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
