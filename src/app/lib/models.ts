import _modelsData from "../data/models.json"
import type {Model} from "../types"

interface ModelsInterface {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

const modelsData: ModelsInterface[] = _modelsData as ModelsInterface[];


export async function getAllModels() {
  return modelsData;
}

export async function getModelsByCategory(category?: string) {
  let filteredModels = [...modelsData]
  if (category) {
    filteredModels = modelsData.filter(model => model.category === category)
  }
  return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }
  return foundModel
}