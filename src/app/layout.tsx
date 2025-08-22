import "./globals.css";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google";
import Navbar from "@/app/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates",
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${albertSans.variable} ${montserratAlternates.variable}`}>
    <Navbar />
    {children}
    </body>
    </html>
  );
}
