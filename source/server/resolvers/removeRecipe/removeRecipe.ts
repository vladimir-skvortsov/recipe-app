import { prisma } from '@server/utils/prisma/prisma'
import { remove } from '@server/utils/s3/s3'


const fragment = `
  fragment RecipeWithPoster on Recipe {
    id
    poster {
      filename
      mimetype
      location
      key
    }
    name
    tags
    description

    ingredients {
      name
      quantity
      unit
    }
    directions

    calories
    protein
    carbohydrates
    fat
  }
`


const removeRecipe = async (root, { id }) => {
  const recipe = await prisma.deleteRecipe({ id }).$fragment(fragment) as any

  if (recipe.poster) await remove(recipe.poster.key)

  return recipe
}


export default removeRecipe
