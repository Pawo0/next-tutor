import "./globals.css";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google";
import Image from "next/image"
import PrintForgeLogo from "@/public/logos/printforge-logo.svg";
import PrintForgeLogoIcon from "@/public/logos/printforge-logo-icon.svg";

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
    <header className={"flex justify-between items-center p-4"}>
      <button>
        <a href={"/"}>
          <Image src={PrintForgeLogo} alt={"desktop logo"} width={350} height={350} className={"w-[200px] h-auto hidden md:block"}/>
          <Image src={PrintForgeLogoIcon} alt={"mobile logo"} width={350} height={350}
                 className={"w-[40px] h-auto block md:hidden"}/>
        </a>
      </button>

      <nav>
        <ul className={"flex gap-4 "}>
          <li><a href="/3d-models">3D Models</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
    {children}
    </body>
    </html>
  );
}
