import { prisma } from '@server/utils/prisma/prisma'


const removeRecipe = (root, { id }) => prisma.deleteRecipe({ id })


export default removeRecipe
