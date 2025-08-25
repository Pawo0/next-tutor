import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"
import CategoriesNav from "@/app/components/CategoriesNav";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories()
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav categories={categories} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
)
}