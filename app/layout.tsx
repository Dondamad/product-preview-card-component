import "./globals.css";
import { Montserrat } from "next/font/google";
import { Fraunces } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fraunces = Fraunces({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Product preview card",
  description: "Frontendmentor challenges - Product preview card component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${montserrat.variable} ${fraunces.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
