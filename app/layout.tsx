import "./globals.css";
import { Montserrat } from "next/font/google";
import { Fraunces } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500", "700"],
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
      <body className="flex flex-col items-center justify-center h-screen sm:flex-col bg-theme-cream-500">
        <main>
          {children}
        </main>
        <footer className="absolute justify-center hidden text-center bottom-3 sm:block sm:bottom-3">
          <p className="text-sm font-montserrat">Designed by <a className="text-theme-dark-cyan-500" href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>. Coded by <a href="#" className="text-theme-dark-cyan-500">DonnxDev</a>.</p>
        </footer>
      </body>
    </html>
  );
}
