import { prisma } from '@server/utils/prisma/prisma'
import { remove } from '@server/utils/s3/s3'


const removeRecipe = async (root, { id }) => {
  const recipe = await prisma.recipe({ id })

  await remove(recipe.posterKey)

  return prisma.deleteRecipe({ id })
}


export default removeRecipe
