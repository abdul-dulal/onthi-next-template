import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";

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
  return (
    <html lang="en" className={` ${syne.className}  `}>
      <body>
        <Header />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
