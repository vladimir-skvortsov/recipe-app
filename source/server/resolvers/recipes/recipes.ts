import { prisma } from '@server/utils/prisma/prisma'


const recipes = async () => {
  const { recipes } = await prisma.$graphql(`
    {
      recipes {
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
    }
  `)

  return recipes
}


export default recipes
