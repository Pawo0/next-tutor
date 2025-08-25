import { getDisplayNameFromSlug} from "@/app/lib/categories";

export default async function CategoriesPage({ params } : { params : Promise<{slug: string}>}){
  const { slug } = await params;
  const name = await getDisplayNameFromSlug(slug)

  return <h1>Name: {name}</h1>
}