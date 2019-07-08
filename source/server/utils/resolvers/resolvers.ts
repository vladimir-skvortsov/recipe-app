import ping from '@server/resolvers/ping/ping'
import recipe from '@server/resolvers/recipe/recipe'
import recipes from '@server/resolvers/recipes/recipes'

import removeRecipe from '@server/resolvers/removeRecipe/removeRecipe'
import addRecipe from '@server/resolvers/addRecipe/addRecipe'
import updateRecipe from '@server/resolvers/updateRecipe/updateRecipe'


const resolvers = {
  Query: {
    ping,
    recipe,
    recipes,
  },

  Mutation: {
    removeRecipe,
    addRecipe,
    updateRecipe,
  },
}


export default resolvers
