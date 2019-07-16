interface Ingredient {
  unit: string
  quantity: number
  name: string
}

export default interface Recipe {
  id: string
  poster?: string
  name: string
  tags: string[]
  description: string


  directions: string[]
  ingredients: Ingredient[]

  calories: number
  protein: number
  carbohydrates: number
  fat: number
}
