import type { Metadata } from "next";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import localFont from "next/font/local";
import { ThemeProvider } from "./_libs/provider/themeProvider";
import "./_styles/globals.css";

const pretendard = localFont({
  src: "./_styles/fonts/PretendardVariable.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className} suppressHydrationWarning>
      <body className="min-w-[320px] mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col">
            <Header />

            {children}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Sumin | Frontend Engineer",
  description:
    "Sumin, 프론트엔드 개발자의 포트폴리오, Lazy Frontend Engineer who likes to travel",
};
