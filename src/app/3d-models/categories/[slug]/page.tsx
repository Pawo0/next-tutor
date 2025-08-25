import { getDisplayNameFromSlug} from "@/app/lib/categories";
import { getModelsByCategory } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";

export default async function CategoriesPage({ params } : { params : Promise<{slug: string}>}){
  const { slug } = await params;
  const name = await getDisplayNameFromSlug(slug)
  const models = await getModelsByCategory(slug)

  return <ModelsGrid title={name} models={models} />
}