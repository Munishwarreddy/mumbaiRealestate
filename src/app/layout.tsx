import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HORIZON | Modern Spaces. Better Living.",
  description: "Discover thoughtfully designed homes in prime locations. Built for comfort, crafted for life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="bg-[#f7f7f5] text-[#111111] min-h-screen flex flex-col selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
