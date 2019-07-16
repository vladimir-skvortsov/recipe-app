import { getExtension } from 'mime'

import { prisma } from '@server/utils/prisma/prisma'
import streamToBuffer from '@server/utils/streamToBuffer/streamToBuffer'
import minifyImage from '@server/utils/minifyImage/minifyImage'
import { upload } from '@server/utils/s3/s3'


const addRecipe = async (root, { props }) => {
  const recipe = await prisma.createRecipe({
    name: props.name,
    tags: { set: props.tags },
    description: props.description,

    ingredients: { create: props.ingredients },
    directions: { set: props.directions },

    calories: props.calories,
    protein: props.protein,
    carbohydrates: props.carbohydrates,
    fat: props.fat,
  })

  if (props.poster) {
    const { createReadStream, mimetype } = await props.poster
    const stream = createReadStream()
    const posterBuffer = await streamToBuffer(stream)
    const minifiedPoster = await minifyImage(posterBuffer)
    const { Location, Key } = await upload(`recipePosters/${recipe.id}.${getExtension(mimetype)}`, minifiedPoster)

    const recipeWithPoster = await prisma.updateRecipe({
      data: { poster: Location, posterKey: Key },
      where: { id: recipe.id },
    })

    return recipeWithPoster
  }

  return recipe
}


export default addRecipe
