
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "프론트엔드 개발자 오한수 포트폴리오",
  description: "프론트엔드 개발자 포트폴리오입니다.",
  keywords:
    "React.js, Next.js, portflio, 오한수, 프론트엔드, 웹, 앱, 개발자, 개발",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
