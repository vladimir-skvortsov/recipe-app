import { prisma } from '@server/utils/prisma/prisma'


const recipes = async () => {
  const { recipes } = await prisma.$graphql(`
    {
      recipes {
        id
        poster
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
    }
  `)

  return recipes
}


export default recipes
