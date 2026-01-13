This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 환경 변수 설정

이 프로젝트는 EmailJS를 사용하기 위해 환경 변수가 필요합니다.

### 로컬 개발 환경

1. 프로젝트 루트에 `.env.local` 파일을 생성하세요.
2. `.env.example` 파일을 참고하여 필요한 환경 변수를 입력하세요:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**⚠️ 중요**: `.env.local` 파일은 절대 GitHub에 커밋하지 마세요! 이미 `.gitignore`에 포함되어 있습니다.

### 호스팅 환경 (Vercel, Netlify 등)

호스팅 플랫폼의 환경 변수 설정 메뉴에서 다음 변수들을 추가하세요:

- **Vercel**: 프로젝트 설정 → Environment Variables
- **Netlify**: Site settings → Environment variables
- **기타 플랫폼**: 각 플랫폼의 환경 변수 설정 메뉴 사용

각 플랫폼에서 환경 변수를 설정하면 배포된 사이트에서도 정상적으로 동작합니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
