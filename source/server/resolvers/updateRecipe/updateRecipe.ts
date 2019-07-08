import { prisma } from '@server/utils/prisma/prisma'


const updateRecipe = (root, { id, props }) => prisma.updateRecipe({ data: props, where: { id } })


export default updateRecipe
