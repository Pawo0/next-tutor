"use client"

import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrintForgeLogo from "@/public/logos/printforge-logo.svg";
import PrintForgeLogoIcon from "@/public/logos/printforge-logo-icon.svg";
import NavLink from "@/app/components/NavLink";

export default function Navbar() {
  const path = usePathname()
  return (
    <header className={"flex justify-between items-center p-4"}>
      <Link href={"/"}>
        <div className="relative cursor-pointer">
          <Image src={PrintForgeLogo} alt={"desktop logo"} width={350} height={350}
                 className={"w-[200px] h-auto hidden md:block"}/>
          <Image src={PrintForgeLogoIcon} alt={"mobile logo"} width={350} height={350}
                 className={"w-[40px] h-auto block md:hidden"}/>
        </div>
      </Link>

      <nav>
        <ul className={"flex gap-4 "}>
          <NavLink href="/3d-models" isActive={path === "/3d-models"}>3D Models</NavLink>
          <NavLink href="/about" isActive={path === "/about"}>About</NavLink>
        </ul>
      </nav>
    </header>
  )
}