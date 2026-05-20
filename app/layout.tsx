import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "山田法律事務所 | 離婚・相続問題の専門家",
  description:
    "離婚・相続問題でお悩みの方へ。経験豊富な弁護士が、あなたに寄り添い最善の解決策をご提案いたします。初回相談無料。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
