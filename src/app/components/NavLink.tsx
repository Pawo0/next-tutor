import Link from "next/link"

export default function NavLink({href, isActive, children}: { href: string, isActive?: boolean , children: React.ReactNode }) {
  const textColor = isActive ? "text-orange-accent" : "text-gray-700"

  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${textColor}`}
      >{children}</Link>
    </li>
  )
}