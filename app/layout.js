"use client";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
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
    }, 2500);
  }, []);

  return (
    <html lang="en" className={` ${syne.className}  `}>
      <head>
        <title>Onthi</title>
      </head>
      <body>
        {isloading ? (
          <Loading />
        ) : (
          <div>
            {/* <Header /> */}
            <div className="">{children}</div>
          </div>
        )}
      </body>
    </html>
  );
}
