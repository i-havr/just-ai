import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Just AI",
  description:
    "Web application allowing you to try the basic capabilities of the AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
