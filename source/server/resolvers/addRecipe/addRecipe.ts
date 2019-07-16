import { prisma } from '@server/utils/prisma/prisma'
import streamToBuffer from '@server/utils/streamToBuffer/streamToBuffer'


const addRecipe = async (root, { props }) => {
  const { poster, ...rest } = props
  console.log(rest)
  let rawPoster
  if (props.poster) {
    const { createReadStream } = await props.poster
    const stream = createReadStream()
    const posterBuffer = await streamToBuffer(stream)
    rawPoster = posterBuffer.toString('utf8')
  }

  return prisma.createRecipe({
    poster: rawPoster,
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
}


export default addRecipe
