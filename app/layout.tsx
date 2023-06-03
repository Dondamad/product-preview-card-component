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
      <body className="flex flex-col items-center justify-center min-h-screen bg-theme-cream-500">
        <div className="flex flex-col items-center justify-center flex-grow">
          <main>
            {children}
          </main>
        </div>
        <footer className="relative w-full text-center bottom-1">
          <p className="text-sm font-montserrat">
            Designed by <a className="text-theme-dark-cyan-500" href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/Dondamad" className="text-theme-dark-cyan-500">DonnxDev</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
