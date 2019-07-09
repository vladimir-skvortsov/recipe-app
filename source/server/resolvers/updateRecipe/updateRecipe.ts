const updateRecipe = (root, { id, props }, { database }) => database.updateRecipe({ data: props, where: { id } })


export default updateRecipe
