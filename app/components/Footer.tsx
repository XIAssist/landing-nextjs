import Link from "next/link";
import { layout, typography } from "@/lib/theme";

export default function Footer() {
  return (
    <footer className={layout.footer}>
      <div className={layout.container}>
        <div className="grid gap-8 md:grid-cols-2">
          {/* 좌측: 회사 정보 */}
          <div className="space-y-2 text-sm">
            <p className={typography.body.footerTitle}>상호명: XIAssist</p>
            <p className={typography.body.footerText}>대표: 박종호</p>
            <p className={typography.body.footerText}>주소: 서울특별시 강남구 반포동</p>
            <p className={typography.body.footerText}>이메일: xiassist@naver.com</p>
          </div>

          {/* 우측: 약관 및 저작권 */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-col gap-2 text-sm md:items-end">
              <Link href="/terms" className={typography.body.link}>
                이용 약관
              </Link>
              <Link href="/privacy" className={typography.body.link}>
                개인정보 처리 방침
              </Link>
            </div>
            <p className={typography.body.footerCopyright}>
              © 2025 XIAssist. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

