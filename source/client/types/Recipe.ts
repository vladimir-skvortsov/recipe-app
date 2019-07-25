interface Ingredient {
  unit: string
  quantity: number
  name: string
}

interface Poster {
  filename: string
  mimetype: string
  location: string
  key: string
}

export default interface Recipe {
  id: string
  poster?: Poster
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
