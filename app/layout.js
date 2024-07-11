"use client";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import Loading from "@/components/ui/Loading";
const syne = Syne({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});
const MyriadPro = localFont({
  src: "./MyriadPro-Regular.woff",
  variable: "--font-myriadPro",
});

export default function RootLayout({ children }) {
  const [isloading, setIloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIloading(false);
    }, 1500);
    Aos.init();
  }, []);

  return (
    <html lang="en" className={`   ${syne.className} `}>
      <title>Onthi</title>
      <body>
        {isloading ? (
          <Loading />
        ) : (
          <div>
            <Header />
            <div className="">{children}</div>
          </div>
        )}
      </body>
    </html>
  );
}
