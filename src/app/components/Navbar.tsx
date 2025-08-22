import Link from "next/link"
import Image from "next/image";
import PrintForgeLogo from "@/public/logos/printforge-logo.svg";
import PrintForgeLogoIcon from "@/public/logos/printforge-logo-icon.svg";

export default function Navbar() {
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
          <li><Link href="/3d-models">3D Models</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}