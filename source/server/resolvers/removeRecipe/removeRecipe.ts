const removeRecipe = (root, { id }, { database }) => database.deleteRecipe({ id })


export default removeRecipe
