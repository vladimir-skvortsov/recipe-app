import { getExtension } from 'mime'

import { prisma } from '@server/utils/prisma/prisma'
import streamToBuffer from '@server/utils/streamToBuffer/streamToBuffer'
import minifyImage from '@server/utils/minifyImage/minifyImage'
import { upload, remove } from '@server/utils/s3/s3'


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


const updateRecipe = async (root, { id, props }) => {
  const recipe = await prisma.updateRecipe({
    data: {
      name: props.name,
      tags: { set: props.tags },
      description: props.description,

      ingredients: { create: props.ingredients },
      directions: { set: props.directions },

      calories: props.calories,
      protein: props.protein,
      carbohydrates: props.carbohydrates,
      fat: props.fat,
    },
    where: { id },
  }).$fragment(fragment) as any

  if (props.poster) {
    await remove(recipe.poster.key)

    const { filename, mimetype, createReadStream } = await props.poster
    const stream = createReadStream()
    const posterBuffer = await streamToBuffer(stream)
    const minifiedPoster = await minifyImage(posterBuffer)
    const { Location, Key } = await upload(`recipePosters/${recipe.id}.${getExtension(mimetype)}`, minifiedPoster)

    const recipeWithPoster = await prisma.updateRecipe({
      data: {
        poster: {
          update: {
            filename,
            mimetype,
            location: Location,
            key: Key,
          },
        },
      },
      where: { id: recipe.id },
    })

    return recipeWithPoster
  }

  return recipe
}


export default updateRecipe
